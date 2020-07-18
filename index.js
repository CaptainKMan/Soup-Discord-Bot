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
        else if (args[0] === 'fluxsoup') {
            const fluxsoup = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('FluxSoup. (a.k.a Scott)')
                .setURL('https://www.twitch.tv/thejellysoup')
                .setDescription('The founder and supreme leader of the Soup Kitchen.')
                .setThumbnail('https://cdn.discordapp.com/avatars/142126035301957632/08b1a2878dfc107da0fa93b9231bf440.png?size=1024')
                .setFooter('Last Updated by DoritoSoup on 7/17/2020.', 'https://cdn.discordapp.com/avatars/357663989418688513/efba3105379791574e341696fd4a5334.png?size=1024');

            return message.channel.send(fluxsoup);
        }
        else if (args[0] === 'doritosoup') {
            const doritosoup = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('DoritoSoup. (a.k.a Captain_KMan)')
                .setURL('https://twitch.tv/dorito__soup')
                .setDescription('The CEO and promoter of the Soup Kitchen.')
                .setThumbnail('https://cdn.discordapp.com/avatars/357663989418688513/efba3105379791574e341696fd4a5334.png?size=1024')
                .setFooter('Last Updated by DoritoSoup on 7/17/2020.', 'https://cdn.discordapp.com/avatars/357663989418688513/efba3105379791574e341696fd4a5334.png?size=1024');

            return message.channel.send(doritosoup);
        }
        else if (args[0] === 'memesoup') {
            const memesoup = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('MemeSoup. (a.k.a DaeCu8603)')
                .setURL('https://twitch.tv/daecu8603')
                .setDescription('The one Soup Kitchen member that never stops posting iFunny memes.')
                .setThumbnail('https://cdn.discordapp.com/avatars/398587405369737217/ffe2226276e727ee4de0d47d95eeb929.png?size=1024')
                .setFooter('Last Updated by DoritoSoup on 7/17/2020.', 'https://cdn.discordapp.com/avatars/357663989418688513/efba3105379791574e341696fd4a5334.png?size=1024');

            return message.channel.send(memesoup);
        }
        else if (args[0] === 'ghostsoup') {
            const ghostsoup = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('GhostSoup. (a.k.a GhostRaider)')
                .setURL('https://www.twitch.tv/ghostsoop')
                .setDescription('The only legitimate weeb in the Soup kitchen.')
                .setThumbnail('https://cdn.discordapp.com/avatars/513683756012273664/854fd909441c5c116484fbea87b1e0fe.png?size=1024')
                .setFooter('Last Updated by DoritoSoup on 7/17/2020.', 'https://cdn.discordapp.com/avatars/357663989418688513/efba3105379791574e341696fd4a5334.png?size=1024');

            return message.channel.send(ghostsoup);
        }
        else if (args[0] === 'elmosoup') {
            const elmosoup = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('ElmoSoup. (a.k.a TZAR_ELMO)')
                .setURL('')
                .setDescription('The one Soup Kitchen member who likes elmo a little too much.')
                .setThumbnail('https://cdn.discordapp.com/avatars/399172695213735936/e490fc22be4ff420245998a1e5f4fa12.png?size=1024')
                .setFooter('Last Updated by DoritoSoup on 7/17/2020.', 'https://cdn.discordapp.com/avatars/357663989418688513/efba3105379791574e341696fd4a5334.png?size=1024');

            return message.channel.send(elmosoup);
        }
        else if (args[0] === 'bearsoup') {
            const bearsoup = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('BearSoup. (a.k.a Josephbres_V12)')
                .setURL('https://www.youtube.com/channel/UCvTds_DwADGRxGwSwmOpM9w?view_as=subscriber')
                .setDescription('The only Soup Kitchen member who has a somewhat successful YouTube channel.')
                .setThumbnail('https://media.discordapp.net/attachments/710514766082474044/724962527162794044/rainbow.gif')
                .setFooter('Last Updated by DoritoSoup on 7/17/2020.', 'https://cdn.discordapp.com/avatars/357663989418688513/efba3105379791574e341696fd4a5334.png?size=1024');

            return message.channel.send(bearsoup);
        }
        else if (args[0] === 'chungussoup') {
            const chungussoup = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('ChungusSoup. (a.k.a GamePlay2534)')
                .setURL('https://www.youtube.com/channel/UCG-I_ZhYde5yWZl6i86UqAQ')
                .setDescription('The one Soup Kitchen member who always leaves games in the middle of matches.')
                .setThumbnail('https://i.pinimg.com/236x/6e/eb/ec/6eebec182f4d5b235cd7fea6037484d1.jpg')
                .setFooter('Last Updated by DoritoSoup on 7/17/2020.', 'https://cdn.discordapp.com/avatars/357663989418688513/efba3105379791574e341696fd4a5334.png?size=1024');

            return message.channel.send(chungussoup);
        }
    }



    message.channel.send(`${args[0]} is not a Soup!`);
});


client.on('message', message => {
    if (message.content === "fuck") {
        message.reply('SWORE DETECTOR HAS DETECTED THE USE OF THE F-WORD');
    } else if (message.content === "fruck") {
        message.reply('SWORE DETECTOR HAS DETECTED THE USE OF THE FR-WORD');
    } else if (message.content === "Fruck") {
        message.reply('SWORE DETECTOR HAS DETECTED THE USE OF THE FR-WORD');
    } else if (message.content === "FRUCK") {
        message.reply('SWORE DETECTOR HAS DETECTED THE USE OF THE FR-WORD');
    } else if (message.content === "FUCK") {
        message.reply('SWORE DETECTOR HAS DETECTED THE USE OF THE F-WORD');
    } else if (message.content === "Fuck") {
        message.reply('SWORE DETECTOR HAS DETECTED THE USE OF THE F-WORD');
    } else if (message.content === "fuck") {
        message.reply('SWORE DETECTOR HAS DETECTED THE USE OF THE F-WORD');
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