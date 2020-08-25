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

// Functions
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

// Launch client instance
const client = new discord.Client() // The client is the bot itself. We create it here.

// Databases
const db = new enmap({ name: 'db' }) // This is the primary database.

// Command Handler
client.commands = new enmap() // Not going to be persistant. It's the command loader.

fs.readdir('./commands/', (err, files) => {

})