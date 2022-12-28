const express = require('express')
const app = express()
app.set('view engine', 'ejs')
const messages = require("./public/javascript/data")


app.get('/', (req,res) =>{
    res.render('index', {messages:messages})
})
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}))

const newRouter = require('./routes/new')
const indexRouter = require('./routes/index')
app.use('/', indexRouter)
app.use('/new', newRouter)


app.listen(3000)
