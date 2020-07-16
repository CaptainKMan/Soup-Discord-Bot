const Discord = require('discord.js');

const client = new Discord.Client();



client.once('ready', () => {
    console.log('Soup is Online!');
})












//Last Line of File
client.login(process.env.BOT_TOKEN);