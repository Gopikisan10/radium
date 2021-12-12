const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema({
        urlCode: { type: String, required: "url-code ", unique: true, lowercase: true, trim: true },
        longUrl: { type: String, required: true },
        shortUrl: { type: String, required: true, unique: true }
      

}, { timestamps: true })

urlSchema.path('longUrl').validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL.');

module.exports = mongoose.model('urlShorten', urlSchema)