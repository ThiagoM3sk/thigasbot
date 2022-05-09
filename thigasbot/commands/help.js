
const Discord = require("discord.js")
const { twitter, author, prefix, versao, github } = require('../config.json')

exports.run = async (client, message, args) =>{
    const server = message.guild.name
    const embed = new Discord.MessageEmbed()
    .setColor('#0000ff')
    .setTitle(`Comandos disponíveis atualmente para ${server}\n **ESTE BOT SERÁ ENCERRADO NO DIA 10/10/2022**`)
    .addField('Versão atual:', `${versao}`)
    .addField('Comandos de moderação:', '`antiraid`, `prune`')
    .addField('Outros comandos:', '`avatar`, `ping`, `ideia`, `info`')
    .setDescription(`Ajuda e descrição dos comandos do servidor\n o prefixo deste servidor é ${prefix}.\n Todos os comandos estão temporariamente desativados!`)
    .addField('Twitter:', `[Twitter](https://twitter.com/${twitter})`)
    .addField('Github:', `[Github](https://github.com/${github})`)
    .setFooter(`Aguarde ${author} desenvolver outros comandos. Siga ${github} no Github`)
    .setTimestamp()
    await message.channel.send(embed)
} 
