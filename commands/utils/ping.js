module.exports = {
	name : "ping",
    async execute(client, m, args) {
		await m.reply('Pong!');
	},
};