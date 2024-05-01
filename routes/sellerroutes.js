const express = require("express");
const sellerrouter = express.Router();
const {
  SellerSignUp,
  SellerLogin,
  ViewItems,
  GetAllOrders,
  AddDeliveryBoys,
  ViewDeliveryBoys,
} = require("../controllers/sellercontroller");

sellerrouter.post("/sellerregister", SellerSignUp);

sellerrouter.post("/sellerlogin", SellerLogin);

sellerrouter.get("/viewitems", ViewItems);

sellerrouter.get("/viewtrans", GetAllOrders);

sellerrouter.post("/adddeliveryboys", AddDeliveryBoys);

sellerrouter.get("/viewdeliveryboys", ViewDeliveryBoys);

module.exports = sellerrouter;
