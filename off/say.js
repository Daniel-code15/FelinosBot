exports.run = ({Discord, client, message, args, dono}) => {

    if (!message.member.hasPermission(['MANAGE_MESSAGES']) || message.author.id !== dono) { 
      return message.channel.send('> Você não pode usar esse comando!');
    }


let help = {
  	embed: {
    		color: 123456,
    author: {
      name: "SimpleBot - Ajuda",
    },
    title: "Comando: !say",
    description: "Informações Sobre o Comando",
    user: "SimpleBot - Ajuda",
    fields: [{
        name: "Uso:",
        value: "!say <#Canal> <Mensagem>"
      },
      {
      	name: "Exemplo:",
      	value: "!say #Geral **Bom Dia**"
      }
    ],
    footer: {
      text: "SimpleBot | Help: !say"
    }
    	}
	}

    let argsresult
    const mChannel = message.mentions.channels.first()
    message.delete()
    if (mChannel) {
      argsresult = args.slice(1).join(' ')
      mChannel.send(argsresult)
    } else {
    	argsresult = args.join(' ')
   		if(argsresult == 'help'){
   			message.channel.send(help)
   		}else {
   			message.channel.send(argsresult)
   		}
    }
  }