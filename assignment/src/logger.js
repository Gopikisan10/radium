function log(name){
    console.log(name)
}

function welcomeNote(welcome){
    console.log(welcome)
}

const url="https://myloger.com/log"

module.exports.log=log
module.exports.welcome=welcomeNote
module.exports.point= url