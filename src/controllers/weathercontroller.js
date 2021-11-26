const axios = require("axios");

const weatheroflondon = async function (req, res) {
  try {
    let options = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${req.query.cit}&appid=${req.query.myappid}`,
    };
    let london= await axios(options)
    res.status(200).send({ msg: "Successfully fetched data", "data": london.data });
  } 

  catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: "Some error occured" });
  }
};
//---------------------------------q-2---------------------------------

const londontmp = async function (req, res) {
  try {
    let options = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${req.query.cit}&appid=${req.query.myappid}`,
    };
    let london= await axios(options)
    res.status(200).send({msg: "Successfully fetched data","temp_of_london": london.data.main.temp });
  } 

  catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: "Some error occured" });
  }

};

//---------------------------------q-3---------------------------------

const weatherofcities = async function (req, res) {
  try {
    let city= ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    let arr=[];
    let options;
    let london;

    for(let i=0;i<city.length;i++){
      options = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=${req.query.myappid}`,
      };
      london= await axios(options)
      arr.push({"city":city[i], "temp": london.data.main.temp})
    }

    let cities=arr.sort(function(a, b) {return parseFloat(a.temp) - parseFloat(b.temp);})
    res.status(200).send({msg: "Successfully fetched data","temp_of_london": cities });
  }

    catch (err) {
      console.log(err.message);
      res.status(500).send({ msg: "Some error occured" });
    }
  }

module.exports.weatheroflondon = weatheroflondon;
module.exports.londontmp = londontmp;
module.exports.weatherofcities = weatherofcities;
