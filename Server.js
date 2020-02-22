const express = require('express')
const path = require('path')
const app  = express()

// app.use(express.static(path.join(__dirname,'assets')))

// //template engine
// app.set('view engine', 'ejs')
// app.set('veiws','views') // default

app.get('/',(req,res,next)=>{
    res.send("hello man")
    //res.render('index')
})

app.listen(3000,(error)=>{
    console.log(error)
    console.log('server is listening on port 3000')
})