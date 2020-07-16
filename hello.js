module.export = {
    name:'hello',
    description: "The hello message",
    execute(message, args){
        
        message.channel.send('Hello :)');

    }
}