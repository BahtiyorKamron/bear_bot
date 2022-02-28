const express = require('express')
const app = express()
const Users = require("./routers/users")
const Check_Info = require("./routers/check_info")
const Check_Admin = require("./routers/check_admin")
const Products = require("./routers/products")
const Savatcha = require("./routers/savatch")
const Categoriya = require("./routers/category")
app.use( express.json())
app.use( Users )
app.use( Check_Info )
app.use( Check_Admin )
app.use( Products )
app.use( Savatcha )
app.use( Categoriya )
app.listen(process.env.PORT,()=>console.log(`http://localhost:${process.env.PORT}`))
