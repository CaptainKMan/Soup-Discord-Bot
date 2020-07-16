module.export = {
    name:'ping',
    description: "The ping message",
    execute(message, args){
        
        message.channel.reply('Pong!')

    }
}