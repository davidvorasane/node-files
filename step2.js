const fs = require('fs')
const process = require('process')
const axios = require('axios')

function cat (path) {
fs.readFile (path, 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})
}

async function webCat(url) {

    try {
       let response = await axios.get(url)
       console.log(response.data) 
    } catch (error) {
        console.log(error.message)
    }
}

let path = "http://google.com/"

if (path.slice(0, 4) === 'http') {
  webCat(path);
} else {
  cat(path);
}
