const Discord = require("discord.js");

module.exports = {
    name: "invite",
    description: "Pegar meu link para adicionar me seu servidor",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async(client, interaction) => {
        let embed = new Discord.EmbedBuilder()
        .setTitle("Invite")
        .setColor("Blue")
        .setThumbnail(`https://cdn.discordapp.com/avatars/1014752767824384022/5fe76833c366085ba46c800d82291957.webp?size=256`)
        .setTimestamp()
        .setDescription(`Clique no botão abaixo para pegar o meu link para me dar add em seu servidor do Discord`);

        let botao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
            .setLabel("URL")
            .setURL(`https://discord.com/api/oauth2/authorize?client_id=1014752767824384022&permissions=8&scope=bot`)
            .setStyle(Discord.ButtonStyle.Link)
        );
        interaction.reply({ embeds: [embed], components: [botao] })
    }
}