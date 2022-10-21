const read = require('./read')
const add = require('./add')
const del = require('./del')

//get users input
const cmd = process.argv

if(cmd[2] === "add") { //add 
    //build the object
    const note = {
        "id": cmd[3],
        "title": cmd[4],
        "body": cmd[5]
    }
    
    //get note.txt contents =
    const oldNote = read()

    //add new note to note.txt 
    add(note,oldNote)
}
if(cmd[2] ==='read'){ //read
    console.log(read())
}

if (cmd[2] === "delete") {
    console.log("delete function")
} 
if (cmd[2] === "delete"){
    const id= cmd[3]
    const oldNote = read()
    const del = require('./del')
    //delete an item from note array
    del(id,oldNote)
    console.log(read())
}

