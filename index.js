/**
 * Discord WHOIS
 * By BadBoyHaloCat
 * 
 * Discord WHOIS is protected by the GNU GPLv3 licence.
 * See LICENCE for more information.
 * 
 * GitHub: https://github.com/thetayloredman/discord-whois
 */

// Load packages
const discord = require("discord.js"), // Discord.JS is the primary library used to run the bot.
    enmap = require("enmap"), // Enmap is the database
    fs = require("fs"),
    chalk = require("chalk"),
    inquirer = require("inquirer")


// Launch client instance
const client = new discord.Client() // The client is the bot itself. We create it here.

const packages = {
    enmap: enmap,
    fs: fs,
    chalk: chalk
}

const config = require("./config.json"),
    package = require("./package.json")

client.config = config

// logger function
function logger(type = 'info', log = 'No logger text specified') {
    if (type === 'info') {
        console.log(chalk.blue(chalk.bold('[INFO]') + ' ' + log))
    } else if (type === 'warning') {
        console.log(chalk.yellow(chalk.bold('[WARN]') + ' ' + log))
    } else if (type === 'error') {
        console.log(chalk.underline(chalk.red(chalk.bold('[ERR]') + ' ' + log)))
    }
}

logger('info', 'Discord WHOIS')
logger('info', 'Version ' + package.version)
logger('info', 'Developed by BadBoyHaloCat')
logger('info', 'Launching client...')

client.on('ready', () => {
    logger('info', 'Client online with username ' + client.user.tag)
})

logger('info', 'Loading databases...')
// Databases
const db = new enmap({ name: 'db' }) // This is the primary database.

logger('info', 'Loading commands...')
// Command Handler
client.commands = new enmap() // Not going to be persistant. It's the command loader.
client.commandshelpData = new enmap() // Commands help data

fs.readdir('./commands/', (err, files) => {
    if (err) {
        logger('error', 'Failed to read ./commands/. Does it exist? ' + err)
        process.exit()
    } else {
        files.forEach((file) => {
            if (file.endsWith('.js')) {
                let commandname = file.split('.').slice(0, file.split('.').length - 1).join('.')
                logger('info', 'Loading command ' + commandname)
                let commanddata = require('./commands/' + file)
                if (!commanddata.info) {
                    logger('error', 'Failed to load command ' + commandname + ', skipping. (NO HELP PROPERTIES)')
                }
                client.commandshelpData.set(`commands`, commanddata.info, commanddata.info.name)
                client.commands.set(commandname, commanddata)
            } else {
                logger('warning', 'Found file ' + file + ' in the commands directory. This is not going to be loaded as it is not a .js file.')
            }
        })
    }
})

// Now we have loaded all commands, we can make the command handler's message event
client.on('message', (message) => {
    // Here we can update the db
    // wip

    if (message.content.startsWith(config.prefix)) {
        let msgcmd = message.content.split('').join(config.prefix.length, message.content.split('').length)
        command = msgcmd[0]
        args = msgcmd.slice(1, msgcmd.length)

        let commandrun = client.commands.get(command)
        commandrun.run(client, message, command, args, db, logger, packages)
    }
})

// Launch client
client.login(client.config.token)