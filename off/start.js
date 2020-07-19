//https://discordapp.com/api/v6/entitlements/gift-codes/${code}?with_application=false&with_subscription_plan=true

exports.run = ({Discord, client, message}) => {

const request = require('request');
const PROXY_FILE = __dirname + "./proxies.txt";
var proxyLine = 0;
var proxyUrl = "";

let canallogs = client.channels.get("722294941753147392");


newcode = function () {
	let dict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let code = '';
	for(var i = 0 ; i < 18 ; i++) {
		code = code + dict.charAt(Math.floor(Math.random() * dict.length));
	}
	return code;
}

	function updateLine(){
        proxyLine++;
        var lineReader = require('line-reader');
        var readLine = 0;
        lineReader.eachLine(PROXY_FILE, function(line, last) {
            readLine++;
            if (readLine === proxyLine) {
                proxyUrl = "http://" + line;
            }
            if (last) {
                readLine = 0;
            }
        });
    }
updateLine();

function checkcode(code) {
	var RequestArgs = request.defaults({'proxy': proxyUrl});
	RequestArgs.get(`https://discordapp.com/api/v6/entitlements/gift-codes/${code}?with_application=false&with_subscription_plan=true`,  (error, resp, body)  => {
		if(error) {
			console.log("Erro! Trocando Proxy: "+proxyUrl);
			updateline();
			return;
		}
		try {
			body = JSON.parse(body);
			if(body.message != "Unknown Gift Code" && body.message != "You are being rate limited.") {
				canallogs.send('NITRO ENCONTRADO:\n \n https://discord.gift/'+code);
				updateLine();
			}
			if(body.message == "You are being rate limited.") {
				console.log("Tentativas Limitadas! Trocando Proxy - "+proxyUrl);
				updateLine();
			}
			if(body.message == "Unknown Gift Code") {
				console.log("Erro! Invalido: "+code);
			}
		} catch (err) {
			console.log(err);
		}
	});
}


checkcode(newcode());
setInterval(() => {
	checkcode(newcode());
}, 1000);

}