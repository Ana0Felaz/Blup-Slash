const Discord = require("discord.js")

module.exports = {
  name: "ajuda", // Coloque o nome do comando
  description: "Veja minhas informações", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    let embed_1 = new Discord.EmbedBuilder()
    .setColor("Blue")
    .setTitle("Blup")
    .setDescription(`Olá, eu me chamo \`Blup\`, sou um bot de Diversão e Moderação, quero o bom e do melhor para seu servidor tenho certeza que seu membros vai gostar de mim, fui criado no dia \`7 de setembro de 2022\` por \`ANÃO FORAGIDO\`,\n Meus comandos são: \`say\`, \`perfil\`, \`ping\`, \`ban\`, \`unban\`, \`clear\`, \`chatlento\`, \`avatar\`, \`setcargo\`, \`donate\`, \`avaliar\`, \`say\`. \nEspero que vocês me ajudem a ser verificado <:verificado:1016920637287170158>`)
    .setTimestamp()
    interaction.reply({ embeds: [embed_1] })

  }
}
