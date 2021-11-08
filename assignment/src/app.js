
const logger= require("./logger")
const helper= require('./util/helper.js')
const formatter = require('../validator/formatter')
const obj = require('underscore')
const obj1=require('lodash')

/*
logger.log("Gopikisan")
logger.welcome("Welcome to my application. I am this , i am functionup")
console.log("this is my url  "+logger.point)


helper.getdate()
helper.getmonth()
helper.printBatchInfo()

formatter.trimString()
formatter.changeLowerCase()
formatter.changeUpperCase()
*/

console.log(obj.first(["apple","banana","papaya"],2))
console.log(obj1._.chunk(['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'], 3))
console.log(obj1._.tail([1,3,5,7,9,11,13,15,17,19]))
console.log(obj1._.union([1,2,3],[1,4,3],[3],[1,3,2,4,5,6],[7,8,9,2],[3,4,5]))

console.log(obj1._.fromPairs([['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]))