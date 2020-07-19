exports.run = ({Discord, client, message}) => {
const request = require('request');


function nrequest() {
	//https://api.thecatapi.com/v1/images/search?mime_types=png&size=med&limit=1

	let urls = ["https://api.thecatapi.com/v1/images/search?mime_types=png&size=med&limit=1", "https://api.thecatapi.com/v1/images/search?size=med&limit=1&type=Animated&mime_types=gif"];
	let randomurl = Math.floor((Math.random() * 2) + 0);
	request.get(`${urls[randomurl]}`,  (error, resp, body)  => {
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
      						name: "FelinosBOT",
    					},
    					title: "Um gatinho veio brincar com você :3",
    					description: "- Miaw",
    					fields: [{
        					name: "\u200b",
        					value: "\u200b"
      					}],
      					footer: {
      						text: "Miaw :3"
    					},
    					image: {
							url: bodyr4.url
						}
   					}
				}
                 	console.log("Felino Enviado Com Sucesso! ID: "+bodyr4.url);
                 	message.channel.send(mensagem);
             }catch(e) {
             	nrequest();
             }
	});
}

nrequest();
}