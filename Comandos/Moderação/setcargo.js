const Discord = require("discord.js")

module.exports = {
  name: "setcaptcha", // Coloque o nome do comando
  description: "Ganhe cargos clicando nos botões", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        name: "cargo",
        description: "Mencione o cargo que deseja ser adicionado no botão.",
        type: Discord.ApplicationCommandOptionType.Role,
        required: true,
    },

    {
        name: "texto",
        description: "Escreva um texto para a embed.",
        type: Discord.ApplicationCommandOptionType.String,
        required: true,
    },
],

  run: async (client, interaction) => {

    if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageRoles)) {
        interaction.reply({ content: `Você não possui permissão para utilizar este comando.`, ephemeral: true })
    } else {
        let cargo = interaction.options.getRole("cargo");
        let textoo = interaction.options.getString('texto')

        let embed = new Discord.EmbedBuilder()
        .setColor("Blue")
        .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
        .setDescription(`${textoo}`);

        let botao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
            .setCustomId("cargo_b" + interaction.id)
            .setLabel("Verificar ✔")
            .setStyle(Discord.ButtonStyle.Primary)
        );

        interaction.reply({ embeds: [embed], components: [botao] }).then( () => {

            let coletor = interaction.channel.createMessageComponentCollector();

            coletor.on("collect", (c) => {
                if (!c.member.roles.cache.get(cargo.id)) {
                    c.member.roles.add(cargo.id)
                    c.reply({ content: `Olá **${c.user.username}**, você resgatou o cargo **${cargo.name}**.`, ephemeral: true })
                } else if (c.member.roles.cache.get(cargo.id)) {
                    c.member.roles.remove(cargo.id)
                    c.reply({ content: `Olá **${c.user.username}**, você perdeu o cargo **${cargo.name}**.`, ephemeral: true })
                }
                
            })
        })
    }


  }
}