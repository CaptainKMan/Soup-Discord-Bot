const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '|';

client.once('ready', () => {
    console.log('Soup is Online!');
    client.user.setActivity("MemeSoup's Internet", { type: 'STREAMING'}).catch(console.error);
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'youtube'){
        message.channel.send('https://www.youtube.com/channel/UC0KW9Y85cFkrZyPkWrNVRUQ');
    } else if (command === 'twitch'){
        message.channel.send('https://twitch.tv/dorito__soup'), 
        message.channel.send('https://twitch.tv/daecu8603');
    } else if (command === 'members'){
        message.channel.send('The current Soup Kitchen members are:'), 
        message.channel.send('<@142126035301957632>'), 
        message.channel.send('<@357663989418688513>'), 
        message.channel.send('<@399172695213735936>'), 
        message.channel.send('<@622181058841935883>'), 
        message.channel.send('<@330761771943985155>'), 
        message.channel.send('<@513683756012273664>'), 
        message.channel.send('<@398587405369737217>');
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
    } else if (message.content === 'Ping'){
        message.channel.send('Pong!')
    } else if (message.content === 'pong'){
        message.channel.send('Ping!')
    } else if (message.content === 'Pong'){
        message.channel.send('Ping!')
    }

});

//Last Line of File
client.login(process.env.BOT_TOKEN);