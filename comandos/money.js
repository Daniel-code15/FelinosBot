const mongoose = require("mongoose");
const Users = require("../Models/Users.js");

exports.run = async ({Discord, client, message, args, dono}) => {
	Users.findOne({
		UserID: message.author.id
	}, (err, dados) => {
		message.channel.send(`> Você tem atualmente ${dados.Coins} coins`);
	});
}