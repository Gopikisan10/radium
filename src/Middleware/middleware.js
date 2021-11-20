
const mid1 = function(req,res,next){
    console.log('im midware');
    next();
}

module.exports.mid1=mid1