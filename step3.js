const fs = require('fs')
const process = require('process')
const axios = require('axios');
const { error } = require('console');


function handleOutput(text, out) {
  if (out) {
    fs.writeFile(out, text, 'utf8', function(error) {
      if (error) {
        console.log(error);
      }
    });
  } else {
    console.log(text);
  }
}


function cat (path) {
fs.readFile (path, 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        handleOutput(data, out)
    }
})
}

async function webCat(url) {

    try {
       let response = await axios.get(url)
       handleOutput(resp.data, out);
    } catch (error) {
        console.log(error.message)
    }
}

let path;
let out;

if (process.argv[2] === '--out') {
  out = process.argv[3];
  path = process.argv[4];
} else {
  path = process.argv[2];
}

if (path.slice(0, 4) === 'http') {
  webCat(path);
} else {
  cat(path);
}
