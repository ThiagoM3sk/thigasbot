/*
exports.run = async (client, message, args) => {
  const roleA = await message.guild.roles.cache.find(role => role.id === "832738173523722271")

  const sender = message.author
  if (
    !message.member.roles.cache.some(r =>
      [
        "834226186128982076",
        "832738486237790238",
        "832738690090139728"
      ].includes(r.id) )) {
    return message.channel.send(`${sender} esse comando é restrito.`)
  } else if (message.content.includes("on")) {
    await roleA.setPermissions(0).catch(console.error)

    await message.channel.send(`O sistema de Antiraid foi ligado pelo Moderador ${sender}`)
  } else if (message.content.includes("off")) {
    await roleA.setPermissions(0).catch(console.error)

    await message.channel.send(
      `O sistema de Antiraid foi desligado pelo Moderador ${sender}`)
  } else {
    return message.channel.send(`${sender} o uso correto é antiraid on | off`)
  }
}
*/