const mongoose = require("mongoose");
const Users = require("../Models/Users.js");
const moment = require('moment');
require('moment-duration-format');

exports.run = async ({Discord, args, message, client}) => {



	Users.findOne({
		UserID: message.author.id
	}, (err, dados) => {

		if(err) return console.log(err);
		
		var tempo = moment.duration.format([moment.duration((parseInt(dados.Daily) + 86400000) - Date.now())], 'D MMMM YYYY, h:mm:ss');
		
		if ((parseInt(dados.Daily) + 86400000) <= (Date.now())) {
			dados.Coins += 5000;
			dados.Daily = Date.now();
			dados.save();
			message.reply("Coletou seu Bonus Diário e ganhou 💵 5000 Coins ❗");
		} else {
			message.reply(`Você só pode coletar seu bonus Diário novamente em ${tempo} ❗❗❗`);
		}

		
	})
}