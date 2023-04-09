require("dotenv").config();
const express = require('express')
const app = express()
const cors=require('cors')
const userRouter=require('./Routes/user.routes')
const postRouter=require('./Routes/post.routes')
const analyticsRouter=require('./Routes/analytics.routes')
const dbConnect=require("./db")
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json())
dbConnect();
app.get('/', (req, res) => res.send('hello'))
app.use('/users',userRouter)
app.use('/posts',postRouter)
app.use('/analytics',analyticsRouter)
app.listen(8080, () => {console.log('server started on port 8080')})

module.exports=app