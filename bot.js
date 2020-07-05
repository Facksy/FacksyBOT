const Discord = require('discord.js');
const client = new Discord.Client();
let msg = "si";
let msssg = 0;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.author.id != client.user.id){
        message.delete();
        if(message.author.id == '701806342981025853'){
            msssg = message;
            setTimeout(myFunction, 30000);
        }
        message.channel.send(message.author.username + " a dit: " + message.content);
    }
});

function myFunction(){
    msssg.channel.send("ThxThx a dit: " + msg);
}

client.login(process.env.BOT_TOKEN);

