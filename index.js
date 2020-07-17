const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '|';

client.once('ready', () => {
    console.log('Soup is Online!');
    client.user.setActivity("with MemeSoup's Internet", { type: 'PLAYING' }).catch(console.error);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'youtube') {
        message.channel.send('```https://www.youtube.com/channel/UC0KW9Y85cFkrZyPkWrNVRUQ```');
    } else if (command === 'twitch') {
        message.channel.send('```https://twitch.tv/dorito__soup```'),
            message.channel.send('```https://twitch.tv/daecu8603```');
    } else if (command === 'members') {
        message.channel.send('The current Soup Kitchen members are:'),
            message.channel.send('<@142126035301957632>'),
            message.channel.send('<@357663989418688513>'),
            message.channel.send('<@399172695213735936>'),
            message.channel.send('<@622181058841935883>'),
            message.channel.send('<@330761771943985155>'),
            message.channel.send('<@513683756012273664>'),
            message.channel.send('<@398587405369737217>');
    } else if (command === 'help') {
        message.author.send('https://raw.githubusercontent.com/CaptainKMan/Readme/master/README.md');
    } else if (command === 'rick') {
        message.channel.send('https://images.app.goo.gl/oTt3wVVgrqo8Wv7Y7');
    } else if (command === 'rick2') {
        message.channel.send('https://images.app.goo.gl/dhwsW3tcXbeu1vud7')
    } else if (command === 'member') {
        if (!args.length) {
            return message.channel.send(`You didn't specify a Soup member, ${message.author}!`);
        }
        else if (args[0] === '<@142126035301957632>'){
            return message.channel.send('*Under Construction*');
        }
        else if (args[0] === '<@357663989418688513>'){
            return message.channel.send('*Under Construction*')
        }
        else if (args[0] === '<@399172695213735936>'){
            return message.channel.send('*Under Construction*')
        }
        else if (args[0] === '<@622181058841935883>'){
            return message.channel.send('*Under Construction*')
        }
        else if (args[0] === '<@330761771943985155>'){
            return message.channel.send('*Under Construction*')
        }
        else if (args[0] === '<@513683756012273664>'){
            return message.channel.send('*Under Construction*')
        }
        else if (args[0] === '<@398587405369737217>'){
            return message.channel.send('*Under Construction*')
        }
    }
    
    
    
    message.channel.send(`${args[0]} is not a Soup!`);
});


client.on('message', message => {
    if (message.content === "fuck") {
        message.reply('SWORE DETECTOR HAS DECTECTED THE USE OF THE F-WORD');
    } else if (message.content === "fruck") {
        message.reply('SWORE DETECTOR HAS DECTECTED THE USE OF THE FR-WORD');
    } else if (message.content === "Fruck") {
        message.reply('SWORE DETECTOR HAS DECTECTED THE USE OF THE FR-WORD');
    } else if (message.content === "FRUCK") {
        message.reply('SWORE DETECTOR HAS DECTECTED THE USE OF THE FR-WORD');
    } else if (message.content === "FUCK") {
        message.reply('SWORE DETECTOR HAS DECTECTED THE USE OF THE F-WORD');
    } else if (message.content === "Fuck") {
        message.reply('SWORE DETECTOR HAS DECTECTED THE USE OF THE F-WORD');
    } else if (message.content === "fuck") {
        message.reply('SWORE DETECTOR HAS DECTECTED THE USE OF THE F-WORD');
    } else if (message.content === 'ping') {
        message.channel.send('Pong!')
    } else if (message.content === 'Ping') {
        message.channel.send('Pong!')
    } else if (message.content === 'pong') {
        message.channel.send('Ping!')
    } else if (message.content === 'Pong') {
        message.channel.send('Ping!')
    } else if (message.content === 'lol') {
        message.channel.send('https://cdn.dlcordapp.com/attachments/486699197131915266/710452259770728448/cute_koishi.png');
    } else if (message.content === 'LMAO') {
        message.channel.send('https://cdn.dlcordapp.com/attachments/486699197131915266/710452259770728448/cute_koishi.png');
    } else if (message.content === 'LoL') {
        message.channel.send('https://cdn.dlcordapp.com/attachments/486699197131915266/710452259770728448/cute_koishi.png');
    }

});




//Last Line of File
client.login(process.env.BOT_TOKEN);