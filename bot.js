const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    /*if (message.author.id == '701806342981025853') {  //239554589072949249  701806342981025853
    	//message.reply('tg');
        client.channels.get('711204646860881940').send(message.content);
        message.delete();
    }*/
    
    if (message.author.id != client.user.id){
        message.delete();
        let rand = Math.floor(Math.random() * Math.floor(2));
        if(message.author.id == '701806342981025853' && rand == 1){
           message.channel.send("DallasTHX0512 a dit: je suis ton fidèle esclave");
        }
       else {
           message.channel.send(message.author.username + " a dit: " + message.content);
       }
       client.channels.get('711204646860881940').send(message.content + " " + rand);
    }
    
});

client.login(process.env.BOT_TOKEN);

