const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.author.id == '239554589072949249') {  //239554589072949249  701806342981025853
    	message.reply('tg');
        message.channels.get('711204646860881940').send(message.content);
        message.delete();
    }
});

client.login(process.env.BOT_TOKEN);
