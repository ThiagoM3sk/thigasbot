/*
exports.run = async (client, message, args) => {


const amount = parseInt(args[0]) + 1
if(
  !message.member.roles.cache.some(r =>
  [
    '834226186128982076',
    '830576375723327518'
  ].includes(r.id)) 
) 
  return message.reply('Este comando é restrito a Moderadores')
		else if (isNaN(amount)) {
			return message.reply('Este não é um número válido')
		} else if (amount <= 1 || amount > 100) {
			return message.reply('Você precisa colocar um número entre 1 e 99.')
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err)
			message.channel.send('[ERRO] Ocorreu um erro ao tentar deletar as mensagens deste canal!')
		})
}
*/