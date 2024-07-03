const { Events } = require("discord.js");
const { token } = require("..");
const runMongo = require("../functions/mongodb");
module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    runMongo()
    console.log(`Ready! Logged in as ${client.user.tag}`);
  },
};
