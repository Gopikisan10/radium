const customerModel = require("../Models/customerModel");
const cardModel = require("../Models/cardModel");

// -----------------

const createCard = async function (req, res) {
  try {
    if (req.user) { //It is use for authentitication
      const card = req.body;
      let obj = { ...card, customerID: req.user.userId }
      let savedCustomer = await cardModel.create(obj);
      return res.send({ data: savedCustomer });
    } else {
      return res.status(401).send("you need to login to perform this task")
    }
  }
  catch (error) {
    return res.status(500).send({ msg: "error-response-status" })
  }
};

//--------------------

const getCardList = async function (req, res) {
  try {
    if (req.user) {  //It is use for authentitication
      let customerId = req.params.customerID
      if (req.user.userId != customerId) {
        return res.status(401).send("you are not authorized")
      }
      const isCustomer = await customerModel.findOne({ _id: customerId })
      if (!isCustomer) {
        return res.status(404).send({ status: false, msg: "customer not exist" })
      }
      const findCardList = await cardModel.find({ customerID: customerId })
      return res.status(200).send({ msg: "You have succesfully fetch all card list", data: findCardList })
    } else {
      res.status(401).send("you need to login to perform this task")
    }
  }
  catch (err) {
    return res.status(500).send({ status: false, message: "Error is: " + err.message })
  }
}

module.exports = { createCard, getCardList }

