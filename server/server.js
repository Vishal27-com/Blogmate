const express = require('express')
require("dotenv").config();
const app = express()
const dbConnect=require("./db")
app.use(express.urlencoded({extended: true}))
app.use(express.json())
dbConnect();
app.get('/', (req, res) => res.send('hello'))

app.listen(8080, () => {console.log('server started on port 8080')})