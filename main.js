{ //constants
const Discord = require('discord.js')

const client = new Discord.Client();

const prefix = '|';


}

client.on('ready', () => {
    console.log('Soup is online!');
    client.user.setActivity("with MemeSoup's internet", { type: 'PLAYING'}).catch(console.error);
});

client.on('message', message =>{
    if(!message.content.startswith(prefix) || message.author.client) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command == 'youtube'){
        message.channel.send("https://www.youtube.com/channel/UC0KW9Y85cFkrZyPkWrNVRUQ");
    } else if (command == 'twitch'){
        message.channel.send("https://twitch.tv/dorito__soup", "https://twitch.tv/daecu8603");
    } 
})

client.on('message', message =>{
    if(message.content === "fuck", "FUCK"){
        message.channel.reply('SWORE DETECTOR HAS DECTECTED THE USE OF THE F-WORD');
    } else if (message.content == "fruck" || "FRUCK"){
        message.channel.reply('SWORE DETECTOR HAS DECTECTED THE USE OF THE FR-WORD');
    } else if (message.content == "hello?" || "HELLO?" || "Hello?" || "hello" || "HELLO" || "Hello"){
        message.channel.send('Hello :)');
    } else if (message.content == "ping"){
        message.channel.reply('Pong!')
    }

})

{ // This has to be the last line of this file
    client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
}