const fs = require('fs');
fs.readdir(__dirname,(err,filenames) => {
    console.log(filenames)
})