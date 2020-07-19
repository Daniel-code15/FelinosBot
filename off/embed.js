exports.run = ({Discord, client, message, args}) => {
    
    if (!message.member.hasPermission(['MANAGE_MESSAGES'])) { 
      return message.channel.send('> Você não pode usar esse comando!') 
    }



  let color = args[0];
  let titulo = args[1];
  let content = args.slice(2).join(' ');
  let cor
  let help = {
embed: {
        color: 3447003,
    author: {
      name: "SimpleBot - Ajuda",
    },
    title: "Comando: !embed",
    description: "Informações Sobre o Comando",
    fields: [{
        name: "Uso:",
        value: "!embed <cor> <titulo> <conteudo>"
      },
      {
        name: "Exemplo:",
        value: "!embed light_grey Exemplo-Embed! Mensagem de Exemplo Embed \nOu \n!embed cinza_claro Exemplo-Embed! Mensagem de Exemplo Embed"
      }
    ],
    footer: {
      text: "SimpleBot | Help: !embed"
    }
      }
  }


if (color == "aqua" || color == "azul_bb" || color == "azulbb" || color == "azulbebê" || color == "azul_bebe" || color == "azul_clarinho") {cor = 1752220;}
if (color == "green" || color == "verde") {cor = 3066993;}
if (color == "blue" || color == "azul") {cor = 3447003;}
if (color == "purple" || color == "roxo" || color == "violeta") {cor = 10181046;}
if (color == "gold" || color == "dourado" || color == "ouro") {cor = 15844367;}
if (color == "orange" || color == "laranja") {cor = 15105570;}
if (color == "red" || color == "vermelho") {cor = 15158332;}
if (color == "grey" || color == "cinza") {cor = 9807270;}
if (color == "darker_grey" || color == "cinza_escurecendo" || color == "cinza_escurinho" || color == "cinzaforte") {cor = 8359053;}
if (color == "navy" || color == "naval") {cor = 3426654;}
if (color == "dark_aqua" || color == "ciano" || color == "azul_ciano" || color == "azul_bb_escuro") {cor = 1146986;}
if (color == "dark_green" || color == "verde_escuro" || color == "verdescuro") {cor = 2067276;}
if (color == "dark_blue" || color == "azulescuro" || color == "azul_escuro" || color == "azul_escurinho" || color == "azulescurinho") {cor = 2123412;}
if (color == "dark_purple" || color == "roxo_escuro" || color == "roxoescuro") {cor = 7419530;}
if (color == "dark_gold" || color == "dourado_escuro" || color == "douradoescuro" || color == "dourado_ofuscado") {cor = 12745742;}
if (color == "dark_orange" || color == "laranja_escuro" || color == "laranjaescuro") {cor = 11027200;}
if (color == "dark_red" || color == "vermelho_escuro" || color == "vermelhoescuro") {cor = 10038562;}
if (color == "dark_grey" || color == "cinzaescuro") {cor = 9936031;}
if (color == "light_grey" || color == "cinzaclaro" || color == "cinza_claro") {cor = 12370112;}
if (color == "dark_navy" || color == "naval_escuro" || color == "navalescuro") {cor = 2899536;}
if (color == "luminous_vivid_pink" || color == "rosa") {cor = 16580705;}
if (color == "dark_vivid_pink" || color == "rosaescuro" || color == "rosa_escuro") {cor = 12320855;}


if (color == "help" || color == "ajuda") {
          message.channel.send(help);
}

try {
let embed = {
    embed: {
        color: `${cor}`,
    title: `${titulo}`,
    description: `${content}`,
    footer: {
      text: "SimpleBot - embed"
    }
      }
  }
  message.channel.send(embed);
} catch(err) {
  message.channel.send("Argumentos Invalidos! Use ` !embed help ` Para Ajuda!");
}
}
message.delete()