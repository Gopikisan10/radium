// const mid1 = async function (req, res, next) {
//     var value = req.headers
//     if (value.isfreeapp) {
//         next()
//     }
//     else {
//         res.send("the request is missing a mandatory header")
//     }
// }

// const mid2 = async function (req, res, next) {
//     var value = req.headers
//     if (value.isfreeappuser) {
//         next()
//     }
//     else {
//         res.send("the request is missing a mandatory header")
//     }
// }

const generalmid = function (req, res, next) {
    let appTypeHeader = req.headers['isfreeapp']
    let isAppFree
    if(!appTypeHeader) {
        return res.send({message: 'Mandatory header missing'})
    }

    if(appTypeHeader === 'false') {
        isAppFree = false
    } else {
        isAppFree = true
    }
    req.isFreeAppUser = isAppFree

    next()
}

// module.exports.mid1 = mid1
// module.exports.mid2 = mid2
module.exports.generalmid = generalmid
