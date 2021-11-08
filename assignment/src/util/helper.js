function printDate(){
    
    console.log(Date())
}

function printMonth(){
    const d=new Date()
    console.log(d.getMonth())
}

function getBatchInfo(){
    console.log("Batch Name- Radium FunctionUp")
    console.log("week - 4th")
    console.log("Todays topic - Node.js")
}

module.exports.getdate=printDate
module.exports.getmonth=printMonth
module.exports.printBatchInfo=getBatchInfo