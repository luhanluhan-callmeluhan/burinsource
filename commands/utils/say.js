module.exports = {
	name : "say",
    async execute(client, m, args) {
		const cont = args.join(" ")
		await m.delete();
		await m.channel.send(cont);
	},
};