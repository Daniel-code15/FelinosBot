exports.run = ({Discord, client, message, args}) => {
    
if (!message.member.hasPermission(['KICK_MEMBERS'])) {
  return;
}

let help = {
  	embed: {
    		color: 333112,
    author: {
      name: "SimpleBot - Ajuda",
    },
    title: "Comando: !kick",
    description: "Informações Sobre o Comando",
    fields: [{
        name: "Uso:",
        value: "!kick <usuario> <motivo>"
      },
      {
      	name: "Exemplo:",
      	value: "!kick @user#0000 Passou dos limites!."
      }
    ],
    footer: {
      text: "SimpleBot - Bot | Help: !kick"
    }
    	}
	}


	let member = message.mentions.members.first();
	let reason = args.slice(1).join(' ');
	let gethelp = args[0];

	if (gethelp == "help") {
		message.channel.send(help)
	}else {
  try {
		member.kick().then((member) => {


let kickado = {
      embed: {
        color: 9807270,
    author: {
      name: "Usuario Punido!",
    },
    title: "Sucesso!",
    description: "Usuario Kickado Com Sucesso!",
    fields: [{
        name: "Usuário:",
        value: `${member}`
      },
      {
        name: "Motivo:",
        value: `${reason}`
      },
      {
        name: "Aplicado Por:",
        value: `<@${message.author.id}>`
      }
    ],
    footer: {
      text: "SimpleBot | Help: !kick"
    }
      }
  }
            message.channel.send(kickado);
        }).catch(err => {message.channel.send("Desculpe, Não posso punir usuarios com cargo acima do meu.")});
	} catch (err) {
    message.channel.send(help);
  }
}

}