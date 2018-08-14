const commando = require('discord.js-commando');

class PfpCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'pfp',
            group: 'simple',
            memberName: 'pfp',
            description: 'Display Your Pofile Picture'
        });
    }

    async run(message, args)
    {
        message.reply(message.author.avatarURL);
    }
}

module.exports = PfpCommand;