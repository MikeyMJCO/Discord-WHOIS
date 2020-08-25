exports.run = (client, message, command, args, db, logger, packages) => {
    // Import modules
    const discord = packages.discord

    // Code the command here
    const cmds = client.commandshelpData;
    const helpembed = new discord.MessageEmbed()
        .setColor('blue')
        .setTitle('Discord WHOIS Help')
        .setAuthor('Discord WHOIS')
        .setDescription('Commands:')
        .setTimestamp()
        .setFooter('Discord WHOIS Bot')

    cmds.forEach((cmd) => {
        desc = cmd.desc
        name = cmd.name

        if (!desc) {
            message.channel.send('Failed to get help message for ' + name)
            logger('error', 'Failed to get help for command ' + desc + ', props are missing.')
        }
    })
}

// Info for help command
exports.info = {
    name: ``,
    description: ``
}