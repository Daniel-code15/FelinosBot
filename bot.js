console.log("Conectando...");
const Discord = require('discord.js');
const client = new Discord.Client({
        autoReconnect: true,
        messageCacheMaxSize: 2024,
        fetchAllMembers: true,
        disabledEvents: ['typingStart', 'typingStop', 'guildMemberSpeaking'],
        messageCacheLifetime: 1680,
        disableEveryone: true,
        messageSweepInterval: 1680
});
const config = require("./config.json");
const token = config.token;
const mongoose = require("mongoose");
mongoose.connect(config.db, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}, (err) => {
    if (err) return console.log(`Erro ao conectar no database!\n${err}`)
    console.log(`Conectado ao BANCO DE DADOS!`);
});

const Group = require("./Models/Group.js");
const Users = require("./Models/Users.js");



client.login(token);

client.on("ready", () => {
	console.log("\n\n\n\n\n"); 
	console.log("Online!");
});


client.on("message", (message) => {

    if (message.channel.type == "dm") return;
    if (message.author.bot) return;
	
    try {
        let catim = require(`./comandos/felinos/catim.js`);
        catim.run({Discord, client, message, token});
    } catch (err) {
        if (err.code == "MODULE_NOT_FOUND") return;
        console.error(err);
    }
    
    Group.findOne({
    	GroupID: message.guild.id
    }, (err, dados) => {
    	if(err) return console.log(err);
    	if(!dados) {
    		const setdefault = new Group({
    			_id: mongoose.Types.ObjectId(),
    			GroupID: message.guild.id,
    			Prefix: "*",
    			CmdsChannel: 0
    		});
    		setdefault.save().then().catch(err => console.log(err));
    	} else {
    		let prefix = dados.Prefix;
    		let cmdchannel = dados.CmdsChannel;

    		if (!message.content.startsWith(prefix)) return;

    		let command = message.content.split(" ")[0];
    		command = command.slice(prefix.length);
    		let args = message.content.split(" ").slice(1);
    		
    		Users.findOne({
    			UserID: message.author.id
    		}, (erro, conteudo) => {
    			if(erro) return console.log(erro);
    			if(!conteudo) {
    				if (command == "register") {
    					let commandFile = require(`./comandos/${command}.js`);
    					commandFile.run({Discord, client, message, args, token});
    					return;
    				}

    				if(cmdchannel != 0) {
    					if(message.channel.id != cmdchannel) {
    						message.channel.send(`> Desculpe, meus comandos estão desativados nesse canal, use o <#${cmdchannel}> para meus comandos!`);
    					}else {
    						message.channel.send(`> Para Usar Meus Comandos, Você precisa criar uma conta em meu banco de dados\n> Use \`  ${prefix}register  \` para se registrar`);
    					}

    				}else {
    					message.channel.send(`> Para Usar Meus Comandos, Você precisa criar uma conta em meu banco de dados\n> Use \` ${prefix}register \` para se registrar`);
    				}
    			} else {
    				try{

    					if(command == "cmdchannel") {
    						if(!message.member.hasPermission("ADMINISTRATOR")) return;
    						message.channel.send(`> Novo canal de comandos definido para <#${message.channel.id}>`);
    						dados.CmdsChannel = message.channel.id;
    						dados.save();
    						return;
    					}
    					if(command == "prefix") {
    						if(!message.member.hasPermission("ADMINISTRATOR")) return;
    						message.channel.send(`> Novo prefixo definido para ${args[0]}`);
    						dados.Prefix = args[0];
    						dados.save();
    						return;
    					}

    					if(cmdchannel != 0) {
    						if(message.channel.id != cmdchannel) {
    							message.channel.send(`> Meus comandos estão desativados nesse canal! use o <#${cmdchannel}> para meus comandos!`);
    						} else {
    							let commandFile = require(`./comandos/${command}.js`);
    							commandFile.run({Discord, client, message, args, token});
    						}
    					} else {
    							let commandFile = require(`./comandos/${command}.js`);
    							commandFile.run({Discord, client, message, args, token});
    					}

    					
    				} catch (err) {

       		 			if (err.code == "MODULE_NOT_FOUND") return;
        					console.error(err);
    					}
    			}
    		});
    	}
    });

});