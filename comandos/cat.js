exports.run = ({Discord, client, message}) => {
const request = require('request');
//const catim = client.emojis.find(emoji => emoji.name === "catim");
//let log = client.channels.cache.get("722294941753147392");

function nrequest() {
	//https://api.thecatapi.com/v1/images/search?mime_types=png&size=med&limit=1
	request.get(`https://api.thecatapi.com/v1/images/search?mime_types=png&size=med&limit=1`,  (error, resp, body)  => {
             if(error){
                 message.channel.send(`> Erro de Conexão com o servidor de imagens\n> Tente novamente mais tarde..`);
                 return;
             }
             try {
                var bodyr1 = body.replace("[", ""),
                 	bodyr2 = bodyr1.replace("\"breeds\":[],", ""),
                 	bodyr3 = bodyr2.replace("]", ""),
                 	bodyr4 = JSON.parse(bodyr3);
             	let mensagem = {
  					embed: {
    					color: 3447003,
    					author: {
      						name: `${message.author.username}`,
    					},
    					title: "Miaw",
    					description: `Você escuta um miado...\nUm gatinho aparece querendo carinho.`,
      					footer: {
      						text: "🐈 Api: thecatapi.com"
    					},
    					image: {
							url: bodyr4.url
						}
   					}
				}
					//client.user.setAvatar(bodyr4.url).catch(err => {console.log("Falha ao alterar foto de perfil");});
                 	//log.send("```Felino Enviado Com Sucesso! LINK: "+bodyr4.url+"```");
                 	message.channel.send(mensagem);
             }catch(e) {
             	nrequest();
             }
	});
}
nrequest();
}