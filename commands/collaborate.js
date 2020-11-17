const { rules } = require('../data.json');

module.exports = {
    name: 'collaborate',
    aliases: ['collab', 'github'],
	description: 'Link to the github repository. Behind the scenes.',
	execute(message, args) {
        const data = [];

        data.push('**Interested in the code behind the bot?**');
        data.push('https://github.com/JordyVanKerkvoorde/hogent-discord-bot');

        

        return message.channel.send(data, { split: true })
    }
};