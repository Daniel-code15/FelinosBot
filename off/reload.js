exports.run = ({Discord, client, message, args, dono}) => {


let sucesso = {
		embed: {
        color: 9807270,
    author: {
      name: "SimpleBot",
    },
    title: "Sucesso!",
    description: "Comando Recarregado com Sucesso!",
    fields: [{
        name: "Comando:",
        value: `!${args[0]}`
      }
    ],
    footer: {
      text: "SimpleBot | Reload"
    }
      }
  }
let falha = {
		embed: {
        color: 9807270,
    author: {
      name: "SimpleBot",
    },
    title: "Falha!",
    description: "Não foi Possivel Recarregar o Comando!",
    fields: [{
        name: "Comando:",
        value: `!${args[0]}`
      }
    ],
    footer: {
      text: "SimpleBot | Reload"
    }
      }
  }






    if (message.author.id !== dono) { 
      return; 
    }

    try {
    	delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch (err) {
    	return message.channel.send(falha);
    }
		message.channel.send(sucesso);
}