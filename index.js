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
        message.channel.send('```https://www.youtube.com/channel/UC0KW9Y85cFkrZyPkWrNVRUQ```');
    } else if (command === 'twitch'){
        message.channel.send('```https://twitch.tv/dorito__soup```'), 
        message.channel.send('```https://twitch.tv/daecu8603```');
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
    } else if (message.content === "Fruck"){
        message.reply('SWORE DETECTOR HAS DECTECTED THE USE OF THE FR-WORD');
    } else if (message.content === "FRUCK"){
        message.reply('SWORE DETECTOR HAS DECTECTED THE USE OF THE FR-WORD');
    } else if (message.content === "FUCK"){
        message.reply('SWORE DETECTOR HAS DECTECTED THE USE OF THE F-WORD');
    } else if (message.content === "Fuck"){
        message.reply('SWORE DETECTOR HAS DECTECTED THE USE OF THE F-WORD');
    } else if (message.content === "fuck"){
        message.reply('SWORE DETECTOR HAS DECTECTED THE USE OF THE F-WORD');
    } else if (message.content === 'ping'){
        message.channel.send('Pong!')
    } else if (message.content === 'Ping'){
        message.channel.send('Pong!')
    } else if (message.content === 'pong'){
        message.channel.send('Ping!')
    } else if (message.content === 'Pong'){
        message.channel.send('Ping!')
    } else if (message.content === 'lmao'){
        message.channel.send('https://cdn.dlcordapp.com/attachments/486699197131915266/710452259770728448/cute_koishi.png');
    } else if (message.content === 'LMAO'){
        message.channel.send('https://cdn.dlcordapp.com/attachments/486699197131915266/710452259770728448/cute_koishi.png');
    } else if (message.content === 'Lmao'){
        message.channel.send('https://cdn.dlcordapp.com/attachments/486699197131915266/710452259770728448/cute_koishi.png');
    } else if (message.content === 'help'){
        author.send('https://github.com/CaptainKMan/Readme/blob/953ba0201c9f4140467dfc4228e719cbd583a0c2/README.md');
    }

});

//Last Line of File
client.login(process.env.BOT_TOKEN);