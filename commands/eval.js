exports.run = (client, message, command, args, udb, gdb, rdb, logger, packages) => {
    // Import modules
    const discord = packages.discord

    // Code the command here
    if (rdb.get(message.author.id, 'rank') !== "Owner") {
        logger('info', 'Stopped ' + message.author.tag + ' from using EVAL!')
        return message.reply('You don\'t have permission to do that! You are **' + rdb.get(message.author.id, 'rank') + '** and you need **Owner**.')
    }

    function clean(text) { // For Eval
        if (typeof(text) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    }

    try {
        let code = args.join(" ")
        let evaled = (args[0] === "async") ? args.shift() && await eval(args.join(' ')) : eval(code)
        if (typeof evaled !== 'string')
            evaled = require('util').inspect(evaled);

        const embed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('Evaluation: Success')
            .setDescription(`\`\`\`xl\n${clean(evaled)}\n\`\`\``)
        message.channel.send(embed);
        logger('info', `[INFO] Evaluation: Success | Code: ${code}`)
    } catch (err) {
        logger('error', `Evaluation: Error | See below log.`)
        client.logger(err)
        const embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Evaluation: Error (Full log in console)')
            .setDescription(`\`\`\`xl\n${clean(err)}\n\`\`\``)
        message.channel.send(embed);
    }
}

// Info for help command
exports.info = {
    name: `eval`,
    description: `Evaluate code! [Requires rank: \`Owner\`]`
}