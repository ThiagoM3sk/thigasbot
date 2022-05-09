const Discord = require("discord.js");
const { twitter, author, prefix, versao, github } = require('../config.json')
exports.run = async (client, message, args) =>{
        const server = message.guild.name
        const embed = new Discord.MessageEmbed()
    .setColor('#6f0b0b')
    .setTitle(`Todos os comandos atualmente estão desativados. Bot exclusivo de ${server}\n **ESTE BOT SERÁ ENCERRADO NO DIA 10/10/2022**`)
    .setDescription(`Digite **${prefix}help** para saber os comandos atuais deste servidor`)
    .addField('Dev:', `${author}`)
    .addField('Versão:', `${versao}`)
    .addField('For more info, access:', `[Github](https://github.com/${github})`)
    .addField('Twitter:', `[Siga](https://twitter.com/${twitter})`)
    .setFooter(`Siga ${github} no Github & ${twitter} no Twitter`)
    .setTimestamp()
  
    await message.channel.send(embed) 
}