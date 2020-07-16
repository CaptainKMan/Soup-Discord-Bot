const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '|';

client.once('ready', () => {
    console.log('Soup is Online!');
    client.user.setActivity("with MemeSoup's Internet", { type: 'PLAYING'}).catch(console.error);
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'youtube'){
        message.channel.send('https://www.youtube.com/channel/UC0KW9Y85cFkrZyPkWrNVRUQ');
    } else if (command === 'twitch'){
        message.channel.send('https://twitch.tv/dorito__soup https://twitch.tv/daecu8603');
    } 
});

client.on('message', message =>{
    if(message.content === "fuck"){
        message.reply('SWORE DETECTOR HAS DECTECTED THE USE OF THE F-WORD');
    } else if (message.content === "fruck"){
        message.reply('SWORE DETECTOR HAS DECTECTED THE USE OF THE FR-WORD');
    } else if (message.content === "FRUCK"){
        message.reply('SWORE DETECTOR HAS DECTECTED THE USE OF THE FR-WORD');
    } else if (message.content === "FUCK"){
        message.reply('SWORE DETECTOR HAS DECTECTED THE USE OF THE F-WORD');
    } else if (message.content === 'ping'){
        message.channel.send('Pong!')
    }

});


//Last Line of File
client.login(process.env.BOT_TOKEN);