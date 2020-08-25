exports.run = (client, message, command, args, db, logger, packages) => {
    // Import modules
    const discord = packages.discord

    // Code the command here
    const cmds = client.commandshelpData.get('commands');
    const helpembed = new discord.MessageEmbed()
        .setColor('#4287f5')
        .setTitle('Discord WHOIS Help')
        .setAuthor('Discord WHOIS')
        .setDescription('Commands:')
        .setTimestamp()
        .setFooter('Discord WHOIS Bot')

    let cmdsls = Object.keys(cmds)
    cmdsls.forEach((cmdo) => {
        let cmd = cmds[cmdo]
        desc = cmd.description
        name = cmd.name
        if (!desc) {
            message.channel.send('Failed to get help message for ' + name)
            logger('error', 'Failed to get help for command ' + name + ', props are missing.')
        } else {
            helpembed.addFields(
                { name: client.config.prefix + name, value: desc}
            )
        }
    })
    message.channel.send(helpembed)
}

// Info for help command
exports.info = {
    name: `help`,
    description: `See all of my commands!`
}