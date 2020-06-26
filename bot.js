const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

let glmessage = 0;

client.on('message', message => {
    if (message.author.id != client.user.id){
        message.delete();
        let rand = Math.floor(Math.random() * Math.floor(4));
        if(message.author.id == '701806342981025853'){
            glmessage = message;
            setTimeout(myFunction, 3000);
            if(rand == 1)
                message.channel.send("DallasTHX0512 a dit: je suis ton fidèle esclave");
            else
                message.channel.send(message.author.username + " a dit: " + message.content);
        }
        else
            message.channel.send(message.author.username + " a dit: " + message.content);
        client.channels.get('711204646860881940').send(message.content + " " + rand);
    }
});

function myFunction(){
    glmessage.channel.send("ThxThx a dit: tg");
}

client.login(process.env.BOT_TOKEN);

