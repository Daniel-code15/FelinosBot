exports.run = ({Discord, client, message, args}) => {
const request = require('request');
let ip = args[0];

let help = {
  	embed: {
    		color: 3447003,
    author: {
      name: "SimpleBot - Ajuda",
    },
    title: "Comando: !mclist",
    description: "Informações Sobre o Comando",
    fields: [{
        name: "Uso:",
        value: "**!mclist <ip>**"
      },
      {
      	name: "Exemplo:",
      	value: "**!mclist mc.beuteugeu.com**"
      }
    ],
    footer: {
      text: "SimpleBot | Help: !McList"
    }
    	}
	}

        request.get(`https://api.mcsrvstat.us/2/${ip}`,  (error, resp, body)  => {
             if(error){
                 console.log(`Erro de Conexão com o servidor https://api.mcsrvstat.us`);
                 return;
             }
             try {
                 body = JSON.parse(body);

let result = {
    embed: {
        color: `3426654`,
    title: `**${ip} | Lista de Jogadores:**`,
    description: `**__${body.players.list.join('\n')}__**`,
    footer: {
      text: "SimpleBot - McList"
    }
      }
  }
                 if (ip == "help") {return message.channel.send(help);}
                 if(body.online){
                    message.channel.send(`> <@${message.author.id}> Enviei para você no privado!`);
                    message.author.send(result);
                 }else {
                 	return message.channel.send("> Servidor Offline ou Não Existe!");
                 }
             }catch (err) {
                 return message.channel.send(help);
             }
          });

}