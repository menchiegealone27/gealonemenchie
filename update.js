const fs = require('fs')

const update = function(note, oldNote) {
    const updateNote = JSON.parse(oldNote)

    const neWNote = updateNote.map(function(n,i) {
        if(n.id == note.id) {
            n.title = note.title
            n.body = note.body


        }
        return n
    })
    fs.writerFileSync('/.note.txt', JSON.stringify(neWNote))

}
module.exports = update