const express = require('express')
const { AdminSignUp, ViewCustomers, AdminLogin, DeleteUser, ViewSellers, DeleteSeller } = require("../controllers/admincontroller")
const adminrouter = express.Router()

//const middleware = require('../middleware')

adminrouter.post("/adminsignup",AdminSignUp)

adminrouter.post("/adminlogin",AdminLogin)

adminrouter.get('/viewcustomers',ViewCustomers)

adminrouter.delete('/deletecustomer/:id', DeleteUser)

adminrouter.get('/viewsellers', ViewSellers)

adminrouter.delete('/deleteseller/:id', DeleteSeller)


module.exports = adminrouter