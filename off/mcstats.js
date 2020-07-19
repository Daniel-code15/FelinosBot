exports.run = ({Discord, client, message, args}) => {
const request = require('request');
var d = new Date();
var months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
let ip = args[0];
let help = {
    embed: {
        color: 3447003,
    author: {
      name: "SimpleBot - Ajuda",
    },
    title: "Comando: !mcstats",
    description: "Informações Sobre o Comando",
    fields: [{
        name: "Uso:",
        value: "**!mcstats <ip>**"
      },
      {
        name: "Exemplo:",
        value: "**!mcstats mc.beuteugeu.com**"
      }
    ],
    footer: {
      text: "SimpleBot | Help: !McStats"
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
                 if (ip == "help") {return message.channel.send(help);}
                let statuson = {
                      embed: {
                          color: 123187,
                      author: {
                        name: "SimpleBot - McStats",
                      },
                      title: "Informações do Servidor",
                      description: `**${ip}**`,
                      fields: [{
                          name: "\u200b",
                          value: `**Online: ~~___✅___~~**`
                        },
                        {
                          name: "\u200b",
                          value: `**Jogadores: __${body.players.online}/${body.players.max}__**`
                        },
                        {
                          name: "\u200b",
                          value: `**Versão: ${body.version}**`
                        },
                        {
                          name: "\u200b",
                          value: `**IP: ${body.ip}**\n**Porta: ${body.port}**\n**Host: ${body.hostname}**`
                        },
                        {
                          name: "\u200b",
                          value: `**Lista de Jogadores: !mclist <ip>**`
                        }
                      ],
                      footer: {
                        text: "SimpleBot | McServer Stats"
                      }
                        }
                    }
                 if(body.online){
                    message.channel.send(statuson);
                 }else {
                  return message.channel.send("> Servidor Offline ou Não Existe!");
                 }
             }catch (err) {
                 return message.channel.send(help);
             }
          });

}









