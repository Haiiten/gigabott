const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const config = require('./config.json')

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('ready',function(){
    console.log("Ready");
});

bot.on('message', function(message){

    if(message.content == 'Hello')
    {
        message.channel.sendMessage('Hello ' + message.author + ', how are you?');
    }
});

bot.login('NDc4MjEwMjMyNDEwMTc3NTM3.DlHxuA.xmto8SORmXIHySZQz_y5kF8Y6fI')