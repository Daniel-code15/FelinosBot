exports.run = ({Discord, client, message, args}) => {
    
if (!message.member.hasPermission(['BAN_MEMBERS'])) {
  return;
}

let help = {
    embed: {
        color: 333112,
    author: {
      name: "SimpleBot - Ajuda",
    },
    title: "Comando: !ban",
    description: "Informações Sobre o Comando",
    fields: [{
        name: "Uso:",
        value: "!ban <usuario> <motivo>"
      },
      {
        name: "Exemplo:",
        value: "!ban @user#0000 conta falsa!"
      }
    ],
    footer: {
      text: "SimpleBot - Bot | Help: !ban"
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
  member.ban().then((member) => {



let banido = {
      embed: {
        color: 231312,
    author: {
      name: "Usuario Punido!",
    },
    title: "Sucesso!",
    description: "Usuario Banido Com Sucesso!",
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
      text: "SimpleBot | Help: !ban"
    }
      }
  }
            message.channel.send(banido);
        }).catch(err => {message.channel.send("Desculpe, Não posso punir usuarios com cargo acima do meu.")});
  } catch (err) {
    message.channel.send(help);
  }
}

}