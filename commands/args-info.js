module.exports = {
    name: 'args-info',
    aliases: ['arguments', 'args'],
	description: 'Information about the arguments provided.',
    usage: "<list of your arguments>",
    args: true,
    guildOnly: true,
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
		
		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};