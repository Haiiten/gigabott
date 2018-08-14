const commando = require('discord.js-commando');
const discord = require('discord.js')

class InfoAboutMeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'info',
            group: 'simple',
            memberName: 'info',
            description: 'Learn About Me!!'
        });
    }

    async run(message, args)
    {
        var myInfo =new discord.RichEmbed()
            .setTitle("About Me!")
            .addField("Hello, my name is Merak, I'm 17 and a Male", true)
            .addField("Side Text", "Your Wierd Reading about me xD", true)
            .addField("Somemore about me", "I Like Big Booty Bitches")
            .setColor(0xFF0000)
            .setThumbnail(message.author.avatarURL)
            .setURL("https://www.youtube.com/c/MerakOfficial")
            .setFooter("Thanks for reading about me!!")

            message.channel.sendEmbed(myInfo);
    }
}

module.exports = InfoAboutMeCommand;