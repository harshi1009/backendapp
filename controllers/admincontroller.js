const sellers = require("../models/Seller")
const AdminSchema = require("../models/Admin");
const customer = require("../models/Customer");

const AdminSignUp = async (req, res) => {

    const { email, password } = req.body;

    const data = {
        email: email,
        password: password
    }
    try {
        let exist = await AdminSchema.findOne({ email: email })

        if (exist) {
            res.json('exist')
        }
        else {
            res.json('notexist')
            await AdminSchema.insertMany([data])
        }
    }
    catch (err) {
        res.json('Something Went Wrong !')
    }
}

const AdminLogin = async (req, res) => {

    const { email, password } = req.body;
    try {
        let exist = await AdminSchema.findOne({ email: email })

        if (exist) {
            res.json('exist')
        }
        else {
            res.json('notexist')
        }
    }
    catch (err) {
        res.json('Something Went Wrong !')
    }
}


const ViewCustomers = (req, res) => {
    customer.find()
        .then((customers) => {
            res.json(customers)
        })
        .catch((err) => {
            res.json(err)
        })
}


const DeleteUser = (req, res) => {
    const id = req.params.id;
    customer.findByIdAndDelete({ _id: id })
        .then(res => res.json(res))
        .catch(err => console.log(err))
}


const ViewSellers = (req, res) => {
    sellers.find()
        .then(sellers => res.json(sellers))
        .catch(err => console.log(err))
}

const DeleteSeller = (req, res) => {
    const id = req.params.id;
    sellers.findByIdAndDelete({ _id: id })
        .then(res => res.json(res))
        .catch(err => console.log(err))
}


module.exports = {AdminSignUp,AdminLogin,ViewCustomers,DeleteUser,ViewSellers,DeleteSeller}