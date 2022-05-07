const Discord = require("discord.js");
const { twitter, author, prefix, versao } = require('../config.json')
exports.run = async (client, message, args) =>{
        const server = message.guild.name
        const embed = new Discord.MessageEmbed()
    .setColor('#6f0b0b')
    .setTitle(`Todos os comandos atualmente estão desativados. Bot exclusivo de ${server}`)
    .setDescription(`Digite **${prefix}help** para saber os comandos atuais deste servidor`)
    .addField('Dev:', `${author}`)
    .addField('Desenvolvido com:', 'discord.js')
    .addField('Versão:', `${versao}`)
    .addField('For more info, access:', `[Github](https://github.com/${twitter})`)
    .addField('Twitter:', `[Siga](https://twitter.com/${twitter})`)
    .setFooter(`Siga ${twitter} no Twitter`)
    .setTimestamp()
  
    await message.channel.send(embed) 
}