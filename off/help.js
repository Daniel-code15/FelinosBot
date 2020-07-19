exports.run = ({Discord, client, message, args}) => {

let help = {
		embed: {
        color: 9807270,
    author: {
      name: "SimpleBot",
    },
    title: "Comandos - SimpleBot",
    description: "Minha lista de comando",
    fields: [{
        name: "Comandos:",
        value: '!tt <1/12> <text>'
      },
      {
      	name: "\u200b",
      	value: '!t <text>'
      },
      {
      	name: "\u200b",
      	value: '!ban <user> <reason>'
      },
      {
      	name: "\u200b",
      	value: '!kick <user> <reason>'
      },
      {
      	name: "\u200b",
      	value: '!help'
      },
      {
      	name: "\u200b",
      	value: '!say <#channel> <text>   ||  !say <text>'
      },
      {
      	name: "\u200b",
      	value: '!embed <color> <title> <content>'
      }
    ],
    footer: {
      text: "SimpleBot | Help"
    }
      }
  }



message.channel.send(`> <@${message.author.id}> Enviei para você em DM`)
message.author.send(help)
message.author.send("Me Adicione :)\n> https://discord.com/api/oauth2/authorize?client_id=712630544269181039&permissions=8&scope=bot")
}