const Discord = require("discord.js")

module.exports = {
  name: "avaliar", // Coloque o nome do comando
  description: "Avaliar algum membro", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [

    {
        name: 'membro',
        description: 'Mencione um membro para ser mencionado',
        type: Discord.ApplicationCommandOptionType.User,
        required: true,
    },

    {
        name: 'nota',
        description: 'Nota para dar para o membro',
        type: Discord.ApplicationCommandOptionType.Number,
        required: true,
    },

    {
        name: 'feedback',
        description: 'Oque ele te ajudou?',
        type: Discord.ApplicationCommandOptionType.String,
        required: true,
    }
],

  run: async (client, interaction) => {

    let nota = interaction.options.getNumber('nota')
    let user = interaction.options.getUser('membro')
    let feedback = interaction.options.getString('feedback')
    let embed_1 = new Discord.EmbedBuilder()

    .setColor('Blue')
    .setTitle(`⭐️ Avaliação`)
    .setDescription(` \`👥\` Membro: ${user}\n \`📃\` Nota: ${nota}\n \`📦\` FeedBack: ${feedback} `)
    .setFooter({ text: ` Avaliação feita por: ${interaction.user.username} ` })

    interaction.reply({ embeds: [embed_1] })

  }
}