const sqlite3 = require('sqlite3').verbose();

let data = new sqlite3.Database('./src/colors.db', sqlite3.OPEN_READONLY, (err)=>{
    if(err){
        return console.error(err.message)
    }
    console.log('connected')
})

var d = []
var temp = []

var row_count = 12
var index = 1

data.all(`SELECT * FROM colors`, [], (err, res)=>{
    for(let i = 0; i < res.length; i++){
        temp.push(res[i].name)
        if (temp.length >= row_count){
            d.push({id: String(index), colors: temp})
            temp = []
            index += 1
        }
    }

    if(temp.length > 0){
        d.push({id: String(index), colors: temp})
    }



    var test = {data:d}

    var fs = require('fs')
    fs.writeFile('./src/db.json', JSON.stringify(test), function(err){
        if (err) throw err;
    })
})

data.close((err)=>{
    if(err){
        return console.error(err.message)
    }
    console.log('all good')
})