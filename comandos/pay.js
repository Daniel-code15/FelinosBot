const mongoose = require("mongoose");
const Users = require("../Models/Users.js");


exports.run = async ({Discord, message, args, client}) => {
	if(!args[1]) return message.channel.send("> Você não especificou o valor.");
	let user = message.mentions.users.first();
  	if (!user) return message.channel.send("> Você não especificou a quem deseja enviar dinheiro");
  	if (user === message.author) return message.channel.send("> Você não pode se pagar. :facepalm:");



  	Users.findOne({
		UserID: message.author.id
	}, (err, dados) => {
		if (err) console.error(err);
		if(dados.Coins < parseInt(args[1])){
			return message.channel.send("> Você não tem coins suficiente em sua conta para isso!");
		}else {
			

			Users.findOne({
				UserID: user.id
			}, (err, dadosp) => {
				if(err) console.log(err);
				if (!dadosp) {
					message.channel.send("> Esta pessoa não possui uma conta para receber dinheiro.");
				} else {
					let mensagem = {
  					embed: {
    					color: 3447003,
    					author: {
      						name: "Pagamento Aprovado!",
    					},
    					title: `Você: ${message.author.username}, Enviou ${args[1]} Coins para ${user.username}.`,
    					description: "Dinheiro Enviado Com Sucesso!",
      					footer: {
      						text: "FelinosBot | Enviado!"
    					}
   					}
				}
            
          			message.channel.send(mensagem);
          			dados.Coins = parseInt(dados.coins) - parseInt(args[1]);
					dados.save().catch(err => console.error(err));
          			dadosp.Coins = parseInt(dadosp.coins) + parseInt(args[1]);
          			dadosp.save().catch(err => console.error(err));
				}
			});

		}

	});
}