const fs = require('fs')

const write = function(cmd = "defualt"){
    fs.writeFileSync('note.txt', cmd);

}
module.exports = write