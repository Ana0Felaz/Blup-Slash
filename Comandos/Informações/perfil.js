const Discord = require("discord.js")

module.exports = {
  name: "perfil", // Coloque o nome do comando
  description: "Ver meu perfil", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {
    
    let cor_da_embed = "Blue";
    let servers = await client.guilds.cache.size
    let member = await client.guilds.cache.reduce((a,b) => a+b.memberCount, 0)

    let embed_1 = new Discord.EmbedBuilder()
    .setColor(cor_da_embed)
    .setTitle("Meu Perfil")
    .setDescription(`\`🗂\`Servidores: \`${servers}\`                                 \n\`👥\`Membros: \`${member}\`                                 \n \`🟢\`Status: \`on-line\`                                 `)
    .setTimestamp()
    interaction.reply({ embeds: [embed_1] })

  }
}