const Discord = require('discord.js');
const client = new Discord.Client();
const msg = "chut";
let msssg = 0;
let toggle = true;

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
        message.delete();
        if(message.author.id == '701806342981025853'){
            msssg = message;
            if(toggle)
                setTimeout(myFunction, 30000);
        }
        message.channel.send(message.author.username + " a dit: " + message.content);
    }
});

function myFunction(){
    msssg.channel.send("ThxThx a dit: " + msg);
}

client.login(process.env.BOT_TOKEN);

