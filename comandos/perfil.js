const mongoose = require("mongoose");
const Users = require("../Models/Users.js");
const moment = require('moment');
require('moment-duration-format');


exports.run = async ({Discord, message, client, args}) => {
	Users.findOne({
		UserID: message.author.id
	}, (err, dados) => {
		if(err) return console.log(err);

		let bonus;
		var tempo = moment.duration.format([moment.duration((parseInt(dados.Daily) + 86400000) - Date.now())], 'D MMMM YYYY, h:mm:ss');
		if ((parseInt(dados.Daily) + 86400000) <= (Date.now())) {
			bonus = "\` Disponivel! \`"
		}else {
			bonus = `\` ${tempo} \``;
		}
// \` ${dados.Coins}  \`
		let msg = {
			embed: {
				color: 3066993,
				author: {
					name: "FelinosBot"
				},
				title: `Suas Informações:`,
				description: `Aqui estão algumas informações úteis de seu perfil!`,
				fields: [{
					name: `Coins:`,
					value: `\` ${dados.Coins} \``,
					inline: true
				},
				{
					name: `Bonus:`,
					value: `\` ${bonus} \``,
					inline: true
				}, 
				{
					name: `ID:`,
					value: `\` ${dados.UserID} \``,
					inline: true
				},
				{
					name: `Premium: `,
					value: `\` ${dados.Donator} \``,
					inline: true
				},
				{
					name: `Pet: `,
					value: `\` Em Breve \``,
					inline: true
				},
				{
					name: `Inventario: `,
					value: `\` Em Breve \``,
					inline: true
				}],
				footer: {
					text: `Perfil ${message.author.username}`,
					icon_url: message.author.avatarURL
				}
			}
		}
		message.channel.send(msg);
	})
}