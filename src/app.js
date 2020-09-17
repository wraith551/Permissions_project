const express = require('express')
const path = require('path')

console.log(__dirname)
console.log(path.join(__dirname,'../public'))

const app = express()                   //variable to store express application
const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))   

app.listen(port,()=>{
    console.log('Server is up on port '+port)
})