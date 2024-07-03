const { Events } = require("discord.js");
module.exports = {
  name: Events.MessageCreate,
  async execute(client, m) {
    if (m.author.id == client.env("BURIN")) return;

    await client.langAna(m.content, m);
    const prefix = "b";
    if (!m.content.toLowerCase().startsWith(prefix)) return;
    const args = m.content.toLowerCase().slice(1).split(" ");
    const commandName = args.shift();

    const command = client.commands.get(commandName)
    if (command) {
        await command.execute(client, m, args);
    } else return;

  },
};
