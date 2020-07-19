exports.run = ({Discord, client, message, args, token, dono}) => {


    if (message.author.id !== dono) { 
      return message.channel.send("> Sem Permissão!"); 
    }
    message.channel.send("> Reiniciando...");
    try {
    	client.destroy(); 
    	console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    	console.log("  ____      _       _      _                 _       ");
    	console.log(" |  _ \\ ___(_)_ __ (_) ___(_) __ _ _ __   __| | ___  ");
    	console.log(" | |_) / _ \\ | '_ \\| |/ __| |/ _` | '_ \\ / _` |/ _ \\ ");
    	console.log(" |  _ <  __/ | | | | | (__| | (_| | | | | (_| | (_) |");
    	console.log(" |_| \\_\\___|_|_| |_|_|\\___|_|\\__,_|_| |_|\\__,_|\\___/ ");
    	console.log("															")
    	console.log("							  ____        _   ")
    	console.log("							 | __ )  ___ | |_ ")
    	console.log("							 |  _ \\ / _ \\| __|")
    	console.log("							 | |_) | (_) | |_ ")
    	console.log("							 |____/ \\___/ \\__|")
    	console.log("\n\n\n\n\n\n\n\n");
    	client.login(token);
    } catch (err) {
    	console.warn(err);
    }

}