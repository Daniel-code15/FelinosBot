exports.run = ({Discord, client, message}) => {

let sn = Math.floor((Math.random() * 20) + 1);



//https://cdn.nekos.life/meow/0${numeroaleatio}A.jpg
function request() {
	let numeroaleatio = Math.floor((Math.random() * 954) + 111);
	message.channel.send(" ", {file: `https://cdn.nekos.life/meow/0${numeroaleatio}A.jpg`}).catch(err => {request();})
}






if (sn == 1) {request();}
}