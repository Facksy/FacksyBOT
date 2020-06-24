const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.author === '<@701806342981025853>') {
    	message.reply('tg');
    }
});

client.login(process.env.BOT_TOKEN);
