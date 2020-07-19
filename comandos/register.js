const mongoose = require("mongoose");
const Users = require("../Models/Users.js");

exports.run = async ({Discord, client, message, args}) => {

let sucesso = {
		embed: {
        color: 3066993,
    author: {
      name: "FelinosBot",
    },
    title: "Sucesso!",
    description: "Sua Conta Foi Registrada Com Sucesso!",
    fields: [{
        name: "ID:",
        value: `${message.author.id}`
      },
      {
      	name: "Premium: ",
      	value: `False`
      },
      {
      	name: "Coins: ",
      	value: "0"
      }
    ],
    footer: {
      text: "FelinosBot | Registro"
    }
      }
  }
let falha = {
		embed: {
        color: 15158332,
    author: {
      name: "FelinosBot",
    },
    title: "Falha!",
    description: "Não foi Possivel Registrar Sua Conta!",
    fields: [{
        name: "Sua Conta Ja está registrada!",
        value: `Você não pode alterar seu registro!`
      }
    ],
    footer: {
      text: "FelinosBot | Register"
    }
      }
  }



	Users.findOne({
		UserID: message.author.id
	}, (err, dados) => {
		if(err) return console.log(err);
		if(dados) {

			message.channel.send(falha);

			return;
		}else {
			const registro = new Users({
				_id: mongoose.Types.ObjectId(),
				UserID: message.author.id,
				Coins: 0,
				Pet: "-",
				Inv: null,
				Admin: false,
				Donator: false,
				Daily: 0
			});

			message.channel.send(sucesso);
			registro.save().then().catch(err => console.log(err));

		}
	});


	


}