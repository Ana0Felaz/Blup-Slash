const Discord = require("discord.js")

module.exports = {
  name: "avatar", // Coloque o nome do comando
  description: "Ver avatar de um membro", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        name: 'user',
        description: 'Usuario de um membro',
        type: Discord.ApplicationCommandOptionType.User,
        required: true,
    }
],

  run: async (client, interaction) => {

    let cor_da_embed = "Blue";
    let userr = interaction.options.getUser('user')
    let embed_1 = new Discord.EmbedBuilder()
    .setColor(cor_da_embed)
    .setTitle(`Avatar de ${userr.username}`)
    .setImage(userr.displayAvatarURL({ size: 256, dynamic: true}))
    .setTimestamp()

    interaction.reply({ embeds: [embed_1] })

  }
}