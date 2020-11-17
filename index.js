require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix} = require('./config.json');
const data = require('./data.json')


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
  client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === `ping`) {
      message.reply('pong');
      if(args[0] === 'pong'){
          return message.channel.send('ping')
      }
    }
  });
  
  client.login(process.env.TOKEN);