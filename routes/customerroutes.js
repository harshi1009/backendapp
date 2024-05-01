const express = require('express')
const customerrouter = express.Router()
const {Signup, Login, GetOrders, UserHomePage, UserProfile, CartPage, GetUserCartPage  } = require('../controllers/customercontroller')

const jsonwebtoken = require('../jsonwebtoken')

customerrouter.post("/signup",Signup)

customerrouter.post("/login",Login)

customerrouter.get('/customerhomepage', UserHomePage)

customerrouter.get('/order', GetOrders)

customerrouter.get('/profile', jsonwebtoken, UserProfile)

customerrouter.post('/cart', CartPage)

customerrouter.get('/cart', jsonwebtoken, GetUserCartPage)





module.exports = customerrouter