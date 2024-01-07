const fs = require('fs')

// if ./new does not exist (existSync), do in bracket

if(!fs.existsSync('./new')){
fs.mkdir('./new', (err) => {
    if(err){
        throw err;
    }

    console.log('directory create');
})
}

//if exist ./new, remove
if(fs.existsSync('./new')){
    fs.rmdir('./new', (err) => {
        if(err){
            throw err;
        }
    
        console.log('directory remov');
    })
    }