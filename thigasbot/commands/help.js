
const Discord = require("discord.js")
const { twitter, author, prefix, versao } = require('../config.json')

exports.run = async (client, message, args) =>{
    const server = message.guild.name
    const embed = new Discord.MessageEmbed()
    .setColor('#0000ff')
    .setTitle(`Comandos disponíveis atualmente para ${server}`)
    .addField('Versão atual:', `${versao}`)
    .addField('Comandos de moderação:', '`antiraid`, `prune`')
    .addField('Outros comandos:', '`avatar`, `ping`, `ideia`, `info`')
    .setDescription(`Ajuda e descrição dos comandos do servidor\n o prefixo deste servidor é ${prefix}.\n Todos os comandos estão temporariamente desativados!`)
    .addField('Twitter:', `[Siga](https://twitter.com/${twitter})`)
    .setFooter(`Aguarde ${author} desenvolver outros comandos. Siga ${twitter} no Twitter`)
    .setTimestamp()
    await message.channel.send(embed)
} 
