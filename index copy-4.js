const fs = require('fs')

fs.unlink('./text-files/some.txt', () => {
    fs.rmdir('./text-files', () => { })
 })







 

