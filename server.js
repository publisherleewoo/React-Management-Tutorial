const express = require('express')
const bodyParser = require('body-parser')
const app = express();
// const cors = require('cors')
const port = process.env.PORT || 5000;
const {sequelize,Customer} = require("./models")
// app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

sequelize.sync()

app.get('/api/customer',(req,res)=>{
    Customer.findAll().then((r)=>{
       console.log(r[0].data)
      // res.send()
    })
})


app.listen(port,()=>{
    console.log(`Listend on port ${port}`)
})


 