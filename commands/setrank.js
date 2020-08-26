exports.run = (client, message, command, args, udb, gdb, rdb, logger, packages) => {
    // Import modules
    const discord = packages.discord

    // Code the command here
    let rank = rdb.get(message.author.id, 'rank')
    if (rank === "User" || rank === "Premium" || rank === "Trusted User") {
        logger('info', 'Stopped ' + message.author.tag + ' from using SETRANK!')
        return message.reply('You don\'t have permission to do that! You are **' + rdb.get(message.author.id, 'rank') + '** and you need **Support**.')
    }
    let embed;

    if (!args[0]) {
        embed = new discord.MessageEmbed()
        .setColor('#4287f5')
        .setTitle('Ranks you can set')
        .setAuthor('Discord WHOIS')
        .setDescription('Here are the ranks you can set:')
        .setTimestamp()
        .setFooter('Discord WHOIS Bot')
        embed.addFields(
            { name: '`Trusted User`', value: 'Trusted Users are basically members that have used the bot a lot.' }
        )

        if (rank === "Admin" || rank === "Owner") {
            embed.addFields(
                { name: '`Maintainer`', value: 'Maintainers manage the database. Their job is to back up and supervise the bot.' },
                { name: '`Support`', value: 'Support is pretty low level, they well.. Support users.' }
            )
        }

        if (rank === "Owner") {
            embed.addFields(
                { name: '`Admin`', value: 'Admins monitor and support the bot.' },
                { name: '`Owner`', value: 'Owners can use eval and bypass all permission restristions.' }
            )
        }
    } else {
        if (!args.slice(1, args.length).join(' ')) {
            return message.reply('What rank did you want to set..?')
        } else {
            let user = args[0].replace(/[<@!>]/g, '')
            const permg = ["Banned", "User", "Premium", "Trusted User", "Support", "Maintainer", "Admin", "Owner"]

            if (permg.includes(args.slice(1, args.length).join(' '))) {
                rdb.set(user, args[2], 'rank')
                logger('info', message.author.tag + ' has set user ' + user + ' to rank ' + args.slice(1, args.length).join(' ') + ' (Info: Channel: "' + message.channel.name + '" in server "' + message.guild.name + '")')
            } else {
                message.reply("What the hell is that rank? I know the following ranks: `" + permg.join('`, `') + '`')
            }
        }
    }
    if (embed) {
        message.reply(embed)
    }
}

// Info for help command
exports.info = {
    name: `setrank`,
    description: `**Rank Needed**: \`Support\`\n**Usage**: \`setrank <mention or user ID> <rank>\`\nSet a user's rank. Run the command with no arguments to see what ranks you can set.`
}