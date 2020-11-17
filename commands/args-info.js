module.exports = {
    name: 'args-info',
    aliases: ['arguments', 'args'],
	description: 'Information about the arguments provided.',
    usage: "[list of your arguments]",
    args: true,
    guildOnly: true,
	execute(message, args) {
        if(!message.member.roles.cache.some(role => role.name === 'Harrier')) return message.channel.send(`You do not have the right permissions to use this command!`);
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
		
		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};