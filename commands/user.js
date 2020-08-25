exports.run = (client, message, command, args, udb, gdb, rdb, logger, packages) => {
    // Import modules
    const discord = packages.discord

    // Code the command here
    if (!args[0]) {
        return message.reply('You need to enter a user!')
    }
    let usertg = args[0].replace(/[<@!>]/g, '')
    if (!udb.get(usertg)) {
        message.reply('That user doesn\'t exist in the database!')
        return;
    }
    const userdata = udb.get(usertg)
    const embed = new discord.MessageEmbed()
        .setColor('#4287f5')
        .setTitle('WHOIS for ' + usertg)
        .setAuthor('Discord WHOIS')
        .setDescription('After a long search, we found <@' + usertg + '> in the database.')
        .setTimestamp()
        .setFooter('Discord WHOIS Bot')
    embed.addFields(
        { name: 'Latest Message', value: '**Message ID**: ' + userdata.lmsg.id + '\n**Guild ID**: ' + userdata.lmsg.guild + '\n**Channel**: <#' + userdata.lmsg.channel + '>\n**Content**: ' + userdata.lmsg.content },
        { name: 'Message Count', value: userdata.mct }
    )
    message.channel.send(embed)
}

// Info for help command
exports.info = {
    name: `user`,
    description: `Get the WHOIS info on a user.`
}