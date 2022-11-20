const express = require('express')
const app = express()
const test = require('./test')

app.get('/', (req, res)=>{
    res.send('hello')
})

app.use('/test', test)

app.listen(3595, ()=>{console.log('express is run')})