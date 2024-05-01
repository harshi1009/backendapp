const sellers = require("../models/Seller")
const order = require("../models/Order")
const items = require("../models/Item")
const deliveryboy = require("../models/DeliveryBoy")

const SellerSignUp = async (req, res) => {

    const { ownername, mobilenumber, email, password, address, pincode, city } = req.body

    const data = {
        ownername, mobilenumber, email, password, address, pincode, city
    }

    try {

        let exist = await sellers.findOne({ email: email })
        if (exist) {
            res.json("exist")
        }
        else {
            res.json("notexist")
            await sellers.insertMany([data])
        }

    }
    catch (err) {
        res.json("Something went wrong !")
    }

}
const SellerLogin = async (req, res) => {

    const { email, password } = req.body
    try {
        let exist = await sellers.find({ email })
        if (exist) {
            res.json('exist')
        }
        else {
            res.json('notexist')
        }

    }
    catch (err) {
        res.json('Something went wrong')
    }
}

const ViewItems = (req, res) => {
    items.find()
        .then(items => res.json(items))
        .catch(err => console.log(err))
}


const AddDeliveryBoys = async (req, res) => {

    const { fullname, mobilenumber, age } = req.body

    const data = {
        fullname, mobilenumber, age
    }

    try {
        let exist = await deliveryboy.findOne({ fullname })

        if (exist) {
            res.json('exist')
        }
        else {
            res.json('notexist')
            await deliveryboy.insertMany([data])
        }

    }
    catch (err) {
        console.log(err)
    }
}



 const ViewDeliveryBoys = (req, res) => {
    deliveryboy.find()
         .then(boys => res.json(boys))
         .catch(err => res.json(err))
 }



const GetAllOrders = (req, res) => {
    order.find({})
         .populate("Users", "fullname")
         .populate("Products", "-photo")
         .sort({ createdAt: -1 })
         .then(orders => res.json(orders))
         .catch(err => console.log(err))
 }




module.exports = {SellerSignUp,SellerLogin,ViewItems,GetAllOrders,AddDeliveryBoys,ViewDeliveryBoys}