const { rules } = require('../data.json');

module.exports = {
    name: 'rules',
    aliases: ['rule'],
	description: 'List all of all the server rules',
	cooldown: 5,
	execute(message, args) {
        const data = [];

        rules.forEach(rule =>{
            data.push(`**${rule.name}**`);
            rule.text.forEach(line => {
                data.push(`${line}`);
            });
            data.push('');
        });

        return message.author.send(data, { split: true })
            .then(() => {
                if (message.channel.type === 'dm') return;
                message.reply('I\'ve sent you a DM with all the rules!');
            })
            .catch(error => {
                console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
            });
    }
};