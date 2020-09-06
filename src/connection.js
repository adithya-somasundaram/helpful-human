const sqlite3 = require('sqlite3').verbose();

// open db connection
let data = new sqlite3.Database('./src/colors.db', sqlite3.OPEN_READONLY, (err)=>{
    if(err){
        return console.error(err.message)
    }
    console.log('connected')
})

// d holds all data, temp holds data for 1 row
var d = []
var temp = []

// row_count is colors per/page, index holds number of pages
var row_count = 12
var index = 1

// query the data from the db
data.all(`SELECT * FROM colors`, [], (err, res)=>{
    if(err){
        return console.error(err.message)
    }
    for(let i = 0; i < res.length; i++){
        temp.push(res[i].name)

        // push and reset temp if row overflows
        if (temp.length >= row_count){
            d.push({id: String(index), colors: temp})
            temp = []
            index += 1
        }
    }

    // add remaining colors
    if(temp.length > 0){
        d.push({id: String(index), colors: temp})
    }

    // store data in json format
    var j = {data:d}
    var fs = require('fs')
    fs.writeFile('./src/db.json', JSON.stringify(j), function(err){
        if (err) throw err;
    })
})

// close db connection
data.close((err)=>{
    if(err){
        return console.error(err.message)
    }
    console.log('all good')
})