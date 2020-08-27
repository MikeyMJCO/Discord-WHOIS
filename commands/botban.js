exports.run = (client, message, command, args, udb, gdb, rdb, logger, packages) => {
    // Import modules
    const discord = packages.discord

    // Code the command here
    if (udb.get(message.author.id, 'rank') === "Support" || udb.get(message.author.id, 'rank') === "Maintainer" || udb.get(message.author.id, 'rank') === "Admin" || udb.get(message.author.id, 'rank') === "Owner")
    if (!args[0]) {
        return message.reply("You need to enter a subcommand. Use `check` `ban` or `unban`!")
    } else {
        if (!args[1]) {
            return message.reply("Who did you want to do that to..?")
        } else {
            let user = args[1].replace(/[<@!>]/g, '')
            if (args[0] === "check") {
                (udb.get(user, 'banned')) ? message.reply("<@" + user + "> is **BANNED**!") : message.reply("<@" + user + "> is **not banned**!")
            } else if (args[0] === "ban") {
                if (udb.get(user, 'banned') === true) {
                    message.reply("The user is already banned..")
                } else {
                    udb.set(user, true, 'banned')
                    message.reply("User <@" + user + "> has been **banned**.")
                }
            } else if (args[0] === 'unban') {
                if (udb.get(user, 'banned') === false) {
                    message.reply("The user isn't banned..")
                } else {
                    udb.set(user, false, 'banned')
                    message.reply("User <@" + user + "> has been **unbanned**.")
                }
            } else {
                message.reply("What the hell is that subcommand? Use `check` `ban` or `unban`!")
            }
        }
    }
}

// Info for help command
exports.info = {
    name: `botban`,
    description: `**Rank Needed**: \`Support\`\n**Usage**: \`botban <check/ban/unban> <mention or user ID>\`\nBan/Unban a user from using the bot.`
}