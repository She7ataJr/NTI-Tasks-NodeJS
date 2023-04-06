// const deal = require('./modules/dealsWithJSON.js')
const yargs = require('yargs')


yargs.command({
    command:"name",
    builder:{ fName:{demandOption:true},
            lName:{demandOption:true}},
    handler: console.log(fName + ' '+ lName)
})

yargs.argv