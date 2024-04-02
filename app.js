const express = require('express')
var expressLayouts = require('express-ejs-layouts');

const app = express()

// set view engine memakai ejs
app.set('view engine', 'ejs')

// set layout menggunakan express-ejs-layout dan menentukan tempat template.js berada
app.use(expressLayouts)
app.set('layout', 'layout/template.ejs')

const contacts = [{"nama": "jon", "mobile": "08123456789"},
                {"nama": "awokwokwo", "mobile": "08923456999"},
                {"nama": "siti", "mobile": "08523458908"}]


app.get('/', (req, res) => {
    res.render('index', 
    {
        nama:'Jon', 
        title:'NodeJS Web Server'
    })
})

app.get('/about', (req, res) => {
    res.render('about', 
    {
        title: "About"
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', 
    {
        title: "Contact", 
        contacts
    })
})

app.get('/product/:id', (req, res) => {
    res.send(`product id: ${req.params.id} <br><br> category id: ${req.query.idCat}`)
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('page not found : 404')
})

app.listen(3000)

