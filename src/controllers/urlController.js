const urlModel = require("../models/urlModel")
const shortid = require("shortid");
const baseUrl = "https://localhost:3000";
const validUrl = require('valid-url')
// -----------------------------------------------------------------------
// create url post API logic(handler)

const createUrl = async function (req, res) {
    try {
        if (!(Object.keys(req.body).length > 0)) {
            // checking body is empty or not if empty run this.
            return res.status(400).send("Url not found...!")
        }
        const longUrl = req.body.longUrl

        // check base url valid or not (validation)
        if (!validUrl.isUri(baseUrl)) {
            return res.status(400).send("Invalid base Url");
        }
        if (validUrl.isUri(longUrl)) {
            const urlToken = shortid.generate()
            let checkUrl = await urlModel.findOne({ longUrl });
            if (checkUrl) {
                return res.status(200).send({ messsage: "you already created short Url for this long url:", data: checkUrl })
            } else {
                const shortUrl = baseUrl + '/' + urlToken;
                const storedata = { longUrl, shortUrl, urlCode: urlToken }
                let savedata = await urlModel.create(storedata);
                return res.status(200).send({ status: true, data: savedata })
            }
        } else {
            return res.status(400).send({ status: false, msg: "long URL invalid" })
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}




const getUrl = async function(req,res){
    try{
        const urlCode1 = req.params.urlCode;
        if(urlCode1){
            const urlFind = await urlModel.findOne({urlCode:urlCode1})
            if(urlFind){
                return res.send(urlFind.longUrl)
            }else{
               return res.status(400).send({status:false, msg:"There is no short url Found"})
            }
        }else{
            return res.status(404).send({status:false, msg:"no url param found"} )
        }

    }catch(error){
       return res.status(500).send(error.message);
    }
}

// module.exports.createUrl = createUrl; 
// module.exports.getUrl=getUrl;


// const getUrl = async function (req, res) {
//     try{
//         let urlCode1 = req.params.urlCode
//         // console.log(typeof urlCode1)
//         if(urlCode1){
//            // console.log(url)
//             const urlFind = await urlModel.findOne({ urlCode: urlCode1})
//         //    console.log(urlFind)
//             if(!urlFind){
//                 // console.log(urlFind.longUrl)
//                 return res.status(400).send("There is No Short Url Found")
                
//             }else{
//                 return res.send(urlFind.longUrl) 
//             }
//         }else{
//             return res.status(404).send("No Url Code Params Found")
//         }
//     } catch(e){
//         return res.status(500).send(e.message);
//     }
// }

module.exports.createUrl = createUrl;
module.exports.getUrl = getUrl;