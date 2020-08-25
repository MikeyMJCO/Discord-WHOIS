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
    chalk = require("chalk")

// Load config and package
const config = require("./config.json"),
    package = require("./package.json")

// Log function
function log(type = 'info', log = 'No log text specified') {
    if (type === 'info') {
        console.log(chalk.blue(chalk.bold('[INFO]') + ' ' + log))
    } else if (type === 'warning') {
        console.log(chalk.yellow(chalk.bold('[WARN]') + ' ' + log))
    } else if (type === 'error') {
        console.log(chalk.underline(chalk.red(chalk.bold('[ERR]') + ' ' + log)))
    }
}

log('info', 'Discord WHOIS')
log('info', 'Version ' + package.version)
log('info', 'Developed by BadBoyHaloCat')
log('info', 'Launching client...')

// Launch client instance
const client = new discord.Client() // The client is the bot itself. We create it here.

log('info', 'Loading databases...')
// Databases
const db = new enmap({ name: 'db' }) // This is the primary database.

log('info', 'Loading commands...')
// Command Handler
client.commands = new enmap() // Not going to be persistant. It's the command loader.

fs.readdir('./commands/', (err, files) => {
    if (err) {
        log('error', 'Failed to read ./commands/. Does it exist? ' + err)
        process.exit()
    } else {
        files.forEach((file) => {
            if (file.endsWith('.js')) {
                let commandname = file.split('.').slice(0, file.split('.').length - 1)
                log('info', 'Loading command ' + commandname)
                fs.readFile('./commands/' + file, 'utf8', (err, contents) => {
                    if (err) {
                        log('error', 'Failed to load command ' + commandname + ', skipping.')
                    } else {
                        log('info', 'Loading command ' + commandname)
                        fs.readFile
                    }
                })
            } else {
                log('warning', 'Found file ' + file + ' in the commands directory. This is not going to be loaded as it is not a .js file.')
            }
        })
    }
})