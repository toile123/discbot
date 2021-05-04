const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command =  require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
client.once('ready', () =>{
    console.log("bot is online!");
})
client.on('message', message =>{
    if (message.author.username === 'Blip'){
        message.channel.bulkDelete(1);
        message.channel.send("cock");
    }
    if (message.content.startsWith('didn') && message.content.endsWith('ask'))
    {
        message.channel.send('https://tenor.com/view/shutup-gif-19889143')
        message.channel.bulkDelete(100)
    }
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    else if (command === 'gaymeter') {
        client.commands.get('gaymeter').execute(message, args);
    }
    else if (command === 'simpmeter') {
        client.commands.get('simpmeter').execute(message, args);
    }
    else if (command === 'stfu') {   
        client.commands.get('stfu').execute(message, args);
    }
    else if (command === 'nig') {   
        client.commands.get('ger').execute(message, args);
    }
    else if (command === 'ban') {   
        client.commands.get('ban').execute(message, args);
    }
});
client.login('ODM4Nzg2MDcyNzQxMTUwODIw.YJAKZw.UkJ9odB5keyjHChQ6XsSCvdN98Q');