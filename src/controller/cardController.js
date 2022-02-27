const customerModel = require("../Models/customerModel");
const cardModel = require("../Models/cardModel");

// -----------------

const createCard = async function (req, res) {
  try {
    if (req.user) { //It is use for authentitication
      const card = req.body; // requesting data from client body 
      let obj = { ...card, customerID: req.user.userId }  // set CustomersID 
      let savedCustomer = await cardModel.create(obj); // creating card details
      return res.send({ data: savedCustomer }); // response of created data
    } else {
      return res.status(401).send("you need to login to perform this task") // Authentication needed
    }
  }
  catch (error) {
    return res.status(500).send({ msg: "error-response-status" }) // Other error
  }
};

//--------------------

const getCardList = async function (req, res) {
  try {
    if (req.user) {  //It is use for authentitication
      let customerId = req.params.customerID  // requesting params from client
      if (req.user.userId != customerId) { // Authorization checking
        return res.status(401).send("you are not authorized") 
      }
      const isCustomer = await customerModel.findOne({ _id: customerId }) 
      if (!isCustomer) {
        return res.status(404).send({ status: false, msg: "customer not exist" })
      }
      const findCardList = await cardModel.find({ customerID: customerId }) // find card details
      return res.status(200).send({ msg: "You have succesfully fetch all card list", data: findCardList }) // response of card list
    } else {
      res.status(401).send("you need to login to perform this task") // Authentication needed
    }
  }
  catch (err) {
    return res.status(500).send({ status: false, message: "Error is: " + err.message }) // other error
  }
}

module.exports = { createCard, getCardList }

