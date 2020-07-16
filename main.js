{ //constants
const Discord = require('discord.js')

const bot = new Discord.Client();

const prefix = '|';

const fs = require('fs');

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSYnc('./').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./${file}`);

    bot.commands.set(command.name, command);
}

}

bot.once('ready', () => {
    console.log('Soup is online!');
    bot.user.setActivity("with MemeSoup's internet", { type: 'PLAYING'}).catch(console.error);
});

bot.on('message', message =>{
    if(!message.content.startswith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command == 'youtube'){
        bot.commands.get('youtube').execute(message, args)
    } else if (command == 'twitch'){
        bot.commands.get('twitch').execute(message, args)
    } 
})

bot.on('message', message =>{
    if(message.content === "fuck", "FUCK"){
        bot.commands.get('fuck').execute(message, args)
    } else if (message.content == "fruck" || "FRUCK"){
        bot.commands.get('fruck').execute(message, args)
    } else if (message.content == "hello?" || "HELLO?" || "Hello?" || "hello" || "HELLO" || "Hello"){
        bot.commands.get('hello').execute(message, args);
    } else if (message.content == "ping"){
        bot.commands.get('ping').execute(message, args)
    }

})

{ // This has to be the last line of this file
    client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
}