const { Client, Events, GatewayIntentBits } = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();
const token = process.env.token;

// Create a new client instance
const client = new Client({ intents: [3276799] });
module.exports = client;
const events = require("./handlers/events");
const functions = require("./functions/main-functions")
const commands = require("./handlers/commands")
events(client);
functions(client);
commands(client);

// Log in to Discord with your client's token
client.login(token);
