const axios = require("axios");
const { ConnectionStates } = require("mongoose");
const model = require("../model/cryptomodel")


// res.status(200). send( { data: userDetails } )

const getcrypto = async function (req, res) {
  try {
    let options = {
      method: "get",
      url: "http://api.coincap.io/v2/assets",
    };
    const crypto = await axios(options);

    console.log("WORKING");
    let cryptodata = crypto.data;
    // res.status(200).send({ msg: "Successfully fetched data", data: cryptodata });
    let coins = crypto.data.data.sort(function (a, b) { return b.changePercent24Hr - a.changePercent24Hr })
    // let datacollection = await model.create(coins)
    // model.findOneAndUpdate({"coins":data.name}, coins, {upsert: true});
    // db.collection.updateMany({coins:data.name},datacollection,{upsert: true})
    // res.status(200).send({ msg: "Successfully fetched data", data: coins });
    for (i = 0; i < coins.length; i++) {
      let currency = {
        symbol: coins[i].symbol,
        name: coins[i].name,
        marketCapUsd: coins[i].marketCapUsd,
        priceUsd: coins[i].priceUsd
      };
  
      await model.findOneAndUpdate({ symbol: coins[i].symbol }, currency, { upsert: true, new: true } );
    }

  } 
  catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: "Some error occured" });
  }

};




const getOtp = async function (req, res){

    try{ 

         let options = {
          method : "post", // method has to be post
          url : `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
          data: { "mobile": req.body.mobile  } // we are sending the json body in the data 
        }
        let response= await axios(options)

        let id= response.data
        res.status(200).send( {msg: "Success", data: id} )

    }
    catch(err) {
        console.log(err.message)
        res.status(500).send( { msg: "Something went wrong" } )
    }
}




module.exports.getcrypto = getcrypto;
module.exports.getOtp = getOtp;