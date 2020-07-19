exports.run = ({Discord, client, message, args, dono}) => {

//if (!message.member.roles.some(role => role.id === '713940007626211368')) {return message.channel.send("> Apenas Usuarios Premium Podem Utilizar essa Função.")}


   const emojicatim = client.emojis.find(emoji => emoji.id === "712842281400401981");
   const banban = client.emojis.find(emoji => emoji.id === "712842298991313017");
   let random = [emojicatim, banban];


   let numero = Math.floor(Math.random() * 1); 
   let texto = args.slice(0).join(' ');


var result = "";
for (var i = 0; i < texto.length; i++) {
	let charAt = texto.charAt(i);
		result+=charAt;

	}

	let result2 = result.split("").reverse().join("");
	   message.channel.send(`${random[numero]}     ==>>  ${result2}`);

}