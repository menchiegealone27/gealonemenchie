const read = require('./read')
const add = require('./add')

//get users input
const cmd = process.argv

if(cmd[2] === "add") { //add 
    //build the object
    const note = {
        "id": cmd[3],
        "title": cmd[4],
        "body": cmd[5]
    }
    
    //get notr.txt contents =
    const oldnote = read()

    //add new note to note.txt 
    add(note,oldNote)
}
