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
    enmap = require("enmap") // Enmap is the database

// Launch client instance
const client = new discord.Client() // The client is the bot itself. We create it here.

// Databases
