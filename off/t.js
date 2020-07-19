const figlet = require('figlet');


exports.run = ({Discord, client, message, args}) => {


let help = {
  	embed: {
    		color: 123132,
    author: {
      name: "SimpleBot - Ajuda",
    },
    title: "Comando: !t",
    description: "Informações Sobre o Comando",
    fields: [{
        name: "Uso:",
        value: "!t <Mensagem>"
      },
      {
      	name: "Exemplo:",
      	value: "!t Bom Dia"
      }
    ],
    footer: {
      text: "SimpleBot | Help: !t"
    }
    	}
	}

let argsresult = args.join(' ')
   		if(argsresult == 'help'){
   			message.channel.send(help);
   		}else {
          message.channel.send(("```"+figlet.textSync(argsresult)+"```"));
   		}
    }