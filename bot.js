const Discord = require('discord.js');
const client = new Discord.Client();
const msg = "tg";
let msssg = 0;
let toggle = true;
let maitre = false;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.author.id != client.user.id){
        if(message.content === "!toggle"){
            toggle = !toggle;
            if(toggle)
                message.channel.send("toggled to true");
            else
                message.channel.send("toggled to false");
        }
        if(message.content === "!maitre"){
            maitre = !maitre;
            if(maitre)
                message.channel.send("toggled to true");
            else
                message.channel.send("toggled to false");
        }
        message.delete();
        if(message.author.id == '701806342981025853'){
            msssg = message;
            if(toggle)
                setTimeout(myFunction, 30000);
            if(maitre)
                message.channel.send(message.author.username + " a dit: Maitre, " + message.content);
            else
                message.channel.send(message.author.username + " a dit: " + message.content);
        }
        else
            message.channel.send(message.author.username + " a dit: " + message.content);
    }
});

function myFunction(){
    msssg.channel.send("ThxThx a dit: " + msg);
}

client.login(process.env.BOT_TOKEN);

