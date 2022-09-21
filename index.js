const Discord = require("discord.js")

const config = require("./config.json")

const client = new Discord.Client({ 
  intents: [ 
Discord.GatewayIntentBits.Guilds
       ]
    });

module.exports = client

client.on('interactionCreate', (interaction) => {

  if(interaction.type === Discord.InteractionType.ApplicationCommand){

      const cmd = client.slashCommands.get(interaction.commandName);

      if (!cmd) return interaction.reply(`Error`);

      interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);

      cmd.run(client, interaction)

   }
})


client.slashCommands = new Discord.Collection()

require('./handler')(client)

client.login(config.token)

//ANTI CRASH
process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception: " + err);
});

process.on("unhandledRejection", (reason, promise) => {
  console.log("[GRAVE] Rejeição possivelmente não tratada em: Promise ", promise, " motivo: ", reason.message);
});

//STATUS
client.on('ready', () => {
  console.log(`✅ - Estou online em ${client.user.username}!`)
  let servers = client.guilds.cache.size
  client.user.setPresence({ activities: [{ name: `💸 - Estou em ${servers} servidores` }], status: 'online' });
})