const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  const banido = message.author || message.member || message.mentions.user.first() || message.member.id
  

  if(!message.member.roles.cache.some(r=>["MOD"].includes(r.name)) )
      return message.channel.send("Apenas moderadores podem banir!")
    let member = message.mentions.members.first()
    if(!member)
      return message.channel.send("Mencione um membro deste servidor")
    if(!member.bannable) 
      return message.channel.send("Não posso banir este membro")
    let reason = args.slice(1).join(' ')
    if(!reason) reason = "Nenhuma razão fornecida"
    await member.ban(reason)
      message.channel.send(`${member.user.tag} foi banido por ${message.author.tag} Motivo: ${reason}`)
      .catch(error => message.channel.send(`Desculpe ${message.author} não consegui banir o membro devido ao erro: ${error}`))
    
}