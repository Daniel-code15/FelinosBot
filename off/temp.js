exports.run = ({Discord, client, message, args, dono}) => {
// teste <:ogaiht_aviap:712765372163424398>
	if (message.author.id !== dono) { 
      return
    }
   const catim = client.emojis.find(emoji => emoji.name == "catim");
   let texto = args.slice(1).join(' ');
   let emojiselect = args[0];

		var result = ""; // variavel central
		for (var i = 0; i < texto.length; i++) {
			let charAt = texto.charAt(i);
			result+=charAt;
		}
		let result2 = result.split("").reverse().join("");
	   	message.channel.send(`${emoji[0]}`);


}