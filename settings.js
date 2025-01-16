//base by DGXeon
//recode by MTS4YOU CHANEL
//YouTube: @MTS4YOU CHANEL
const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "Cicak" //ur yt chanel name
global.socialm = "IG: @reyinfinite" //ur github or insta name
global.location = "Indonesia" //ur location

//new
global.botname = 'Nayla Multi Device' //ur bot name
global.ownernumber = '6282210739170' //ur owner number
global.ownername = 'MTS4YOU XD' //ur owner name
global.websitex = "https://whatsapp.com/channel/0029VaslU1y6hENuTJDPi10L" //"https://chat.whatsapp.com/C3Hz1i2uYjb3X3bmZTrFxA"
global.wagc = "https://whatsapp.com/channel/0029VaslU1y6hENuTJDPi10L" //"https://chat.whatsapp.com/C3Hz1i2uYjb3X3bmZTrFxA"
global.themeemoji = '🪀'
global.wm = "MTS4YOU-XD"
global.botscript = 'https://m.youtube.com/channel/UCcsmxAtiv9Af10psQ-EI1XA' //'https://chat.whatsapp.com/C3Hz1i2uYjb3X3bmZTrFxA' //script link
global.packname = "Nayla MD"
global.author = "Nayla - Package"
global.creator = "6282210739170@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6282210739170"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v3' // reply type 'v1' => 'v3'
global.autoblocknumber = '' //set autoblock country code
global.antiforeignnumber = '' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up <\>',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done ✓',
    error: 'Error !',
    success: 'Succes •'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})