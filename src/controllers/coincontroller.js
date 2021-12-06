// const axios = require("axios");
// const coin = require("../models/coinModel.js")

// const coinfetch = async function (req, res) {
//     let auth = req.header.authorization;
//     try {
//         let options = {
//             method: "get",
//             url: `http://api.coincap.io/v2/assets?Authorization=${auth}`
//         };
//         let response = await axios(options)
//         let element;
//         response = response.data.data;
//         let Sortedcoin = response.sort(function (a, b) { return parseFloat(a.changePercent24Hr) - parseFloat(b.changePercent24Hr); })
//         for (let i = 0; i < Sortedcoin.length; i++) {
//             element = {
//                 symbol: Sortedcoin[i].symbol,
//                 name: Sortedcoin[i].name,
//                 marketCapUsd: Sortedcoin[i].marketCapUsd,
//                 priceUsd: Sortedcoin[i].priceUsd
//             }
//             await coin.create(element)
//         }
//         let savedData = await coin.find()
//         res.status(200).send({ msg: "Successfully fetched data", "data": savedData });
//     }

//     catch (err) {
//         console.log(err.message);
//         res.status(500).send({ msg: "Some error occured" });
//     }
// };

// module.exports.coinfetch = coinfetch;