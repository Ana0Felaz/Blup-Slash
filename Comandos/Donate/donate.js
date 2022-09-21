const Discord = require("discord.js")

module.exports = {
  name: "donate", // Coloque o nome do comando
  description: "Doar pix para mim", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {
    let embed = new Discord.EmbedBuilder()
    .setColor("Yellow")
    .setTitle("<:pix:1020179385736761375>  Code QR")
    .setDescription(`Para faser um donate via pix entre em um banco que tenha escaner de \`Code QR\` via pix para enviar`)
    .setImage(`https://cdn.discordapp.com/attachments/1015886411167174656/1020178608033120266/Screenshot_20220907-0307432.png`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/1015886411167174656/1020201867290103818/nitro.gif`)
    .setTimestamp()
    interaction.reply({ embeds: [embed] })

  }
}