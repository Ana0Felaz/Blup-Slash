const Discord = require("discord.js")

module.exports = {
  name: "ping", // Coloque o nome do comando
  description: "Ver meu ping", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {
        
        let cor_da_embed = "Blue";

        let ping_do_bot = client.ws.ping;

        let embed_1 = new Discord.EmbedBuilder()
        .setColor(cor_da_embed)
        .setDescription(`Carregando...`);
        
        let embed_2 = new Discord.EmbedBuilder()
        .setColor(cor_da_embed)
        .setDescription(`**Meu ping: \`${ping_do_bot} ms\`.**`);

        interaction.reply({ embeds: [embed_1] }).then( () => {
            setTimeout( () => {
                interaction.editReply({ embeds: [embed_2] })
            }, 2000)
        })

  }
}