exports.run = ({Discord, client, message, args}) => {

const Users = require("../Models/Users.js");


let sucesso = {
		embed: {
        color: 9807270,
    author: {
      name: "FelinosBot",
    },
    title: "Sucesso!",
    description: "Comando Recarregado com Sucesso!",
    fields: [{
        name: "Comando:",
        value: `${args[0]}`
      }
    ],
    footer: {
      text: "FelinosBot | Reload"
    }
      }
  }
let falha = {
		embed: {
        color: 9807270,
    author: {
      name: "FelinosBot",
    },
    title: "Falha!",
    description: "Não foi Possivel Recarregar o Comando!",
    fields: [{
        name: "Comando:",
        value: `${args[0]}`
      }
    ],
    footer: {
      text: "FelinosBot | Reload"
    }
      }
  }


Users.findOne({
	UserID: message.author.id
}, (err, dados) => {
	if(err) return;
	if(dados.Admin) {
		try {
    		delete require.cache[require.resolve(`./${args[0]}.js`)];
    	} catch (err) {
    		return message.channel.send(falha);
    	}
			message.channel.send(sucesso);
	}else {
		return;
	}
})}