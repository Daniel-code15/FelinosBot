exports.run = ({Discord, client, message, args}) => {




let help = {
  	embed: {
    		color: 3447003,
    author: {
      name: "FelinosBOT - Ajuda",
    },
    title: "Comando: !tt",
    description: "Informações Sobre o Comando",
    fields: [{
        name: "Uso:",
        value: "!tt <1/12> <Mensagem>"
      },
      {
      	name: "Fontes:",
      	value: "1 - 𝓕𝓮𝓵𝓲𝓷𝓸𝓼𝓑𝓞𝓣 \n2 - 𝐹𝑒𝓁𝒾𝓃𝑜𝓈𝐵𝒪𝒯 \n3 - 𝕱𝖊𝖑𝖎𝖓𝖔𝖘𝕭𝕺𝕿 \n4 - 𝔉𝔢𝔩𝔦𝔫𝔬𝔰𝔅𝔒𝔗 \n5 - 🅕🅔🅛🅘🅝🅞🅢🅑🅞🅣 \n6 - 🄵🄴🄻🄸🄽🄾🅂🄱🄾🅃 \n7 - [F̲̅є̲̅l̲̅i̲̅и̲̅σ̲̅s̲̅B̲̅O̲̅T̲̅] \n8 - FᴇʟɪɴᴏsBOT \n9 - F̶e̶l̶i̶n̶o̶s̶B̶O̶T̶\n10 - TOBsoʋı|əF \n11 - 𝔽𝕖𝕝𝕚𝕟𝕠𝕤𝔹𝕆𝕋 \n12 - 𝙵𝚎𝚕𝚒𝚗𝚘𝚜𝙱𝙾𝚃"
      }
    ],
    footer: {
      text: "FelinosBOT | Help: !tt"
    }
    	}
	}
let fonte = args[0];
let originalText = args.slice(1).join(' ');

if(fonte == 'help'){ 
	message.channel.send(help);
}

let font1 = ["𝓪","𝓪","𝓪","𝓪","𝓪","𝓪","𝓫","𝓬","𝓬","𝓭","𝓮","𝓮","𝓮","𝓮","𝓮","𝓯","𝓰","𝓱","𝓲","𝓲","𝓲","𝓲","𝓲","𝓳","𝓴","𝓵","𝓶","𝓷","𝓸","𝓸","𝓸","𝓸","𝓸","𝓸","𝓹","𝓺","𝓻","𝓼","𝓽","𝓾","𝓾","𝓾","𝓾","𝓾","𝓿","𝔀","𝔁","𝔂","𝔃",
"𝓐","𝓐","𝓐","𝓐","𝓐","𝓐","𝓑","𝓒","𝓒","𝓓","𝓔","𝓔","𝓔","𝓔","𝓔","𝓕","𝓖","𝓗","𝓘","𝓘","𝓘","𝓘","𝓘","𝓙","𝓚","𝓛","𝓜","𝓝","𝓞","𝓞","𝓞","𝓞","𝓞","𝓞","𝓟","𝓠","𝓡","𝓢","𝓣","𝓤","𝓤","𝓤","𝓤","𝓤","𝓥","𝓦","𝓧","𝓨","𝓩",
"0","1","2","3","4","5","6","7","8","9"];

let font2 = ["𝒶","𝒶","𝒶","𝒶","𝒶","𝒶","𝒷","𝒸","𝒸","𝒹","𝑒","𝑒","𝑒","𝑒","𝑒","𝒻","𝑔","𝒽","𝒾","𝒾","𝒾","𝒾","𝒾","𝒿","𝓀","𝓁","𝓂","𝓃","𝑜","𝑜","𝑜","𝑜","𝑜","𝑜","𝓅","𝓆","𝓇","𝓈","𝓉","𝓊","𝓊","𝓊","𝓊","𝓊","𝓋","𝓌","𝓍","𝓎","𝓏",
"𝒜","𝒜","𝒜","𝒜","𝒜","𝒜","𝐵","𝒞","𝒞","𝒟","𝐸","𝐸","𝐸","𝐸","𝐸","𝐹","𝒢","𝐻","𝐼","𝐼","𝐼","𝐼","𝐼","𝒥","𝒦","𝐿","𝑀","𝒩","𝒪","𝒪","𝒪","𝒪","𝒪","𝒪","𝒫","𝒬","𝑅","𝒮","𝒯","𝒰","𝒰","𝒰","𝒰","𝒰","𝒱","𝒲","𝒳","𝒴","𝒵",
"0","1","2","3","4","5","6","7","8","9"];

let font3 = ["𝖆","𝖆","𝖆","𝖆","𝖆","𝖆","𝖇","𝖈","𝖈","𝖉","𝖊","𝖊","𝖊","𝖊","𝖊","𝖋","𝖌","𝖍","𝖎","𝖎","𝖎","𝖎","𝖎","𝖏","𝖐","𝖑","𝖒","𝖓","𝖔","𝖔","𝖔","𝖔","𝖔","𝖔","𝖕","𝖖","𝖗","𝖘","𝖙","𝖚","𝖚","𝖚","𝖚","𝖚","𝖛","𝖜","𝖝","𝖞","𝖟",
"𝕬","𝕬","𝕬","𝕬","𝕬","𝕬","𝕭","𝕮","𝕮","𝕯","𝕰","𝕰","𝕰","𝕰","𝕰","𝕱","𝕲","𝕳","𝕴","𝕴","𝕴","𝕴","𝕴","𝕵","𝕶","𝕷","𝕸","𝕹","𝕺","𝕺","𝕺","𝕺","𝕺","𝕺","𝕻","𝕼","𝕽","𝕾","𝕿","𝖀","𝖀","𝖀","𝖀","𝖀","𝖁","𝖂","𝖃","𝖄","𝖅",
"0","1","2","3","4","5","6","7","8","9"];

let font4 = ["𝔞","𝔞","𝔞","𝔞","𝔞","𝔞","𝔟","𝔠","𝔠","𝔡","𝔢","𝔢","𝔢","𝔢","𝔢","𝔣","𝔤","𝔥","𝔦","𝔦","𝔦","𝔦","𝔦","𝔧","𝔨","𝔩","𝔪","𝔫","𝔬","𝔬","𝔬","𝔬","𝔬","𝔬","𝔭","𝔮","𝔯","𝔰","𝔱","𝔲","𝔲","𝔲","𝔲","𝔲","𝔳","𝔴","𝔵","𝔶","𝔷",
"𝔄","𝔄","𝔄","𝔄","𝔄","𝔄","𝔅","ℭ","ℭ","𝔇","𝔈","𝔈","𝔈","𝔈","𝔈","𝔉","𝔊","ℌ","ℑ","ℑ","ℑ","ℑ","ℑ","𝔍","𝔎","𝔏","𝔐","𝔑","𝔒","𝔒","𝔒","𝔒","𝔒","𝔒","𝔓","𝔔","ℜ","𝔖","𝔗","𝔘","𝔘","𝔘","𝔘","𝔘","𝔙","𝔚","𝔛","𝔜","ℨ",
"0","1","2","3","4","5","6","7","8","9"];

let font5 = ["🅐","🅐","🅐","🅐","🅐","🅐","🅑","🅒","🅒","🅓","🅔","🅔","🅔","🅔","🅔","🅕","🅖","🅗","🅘","🅘","🅘","🅘","🅘","🅙","🅚","🅛","🅜","🅝","🅞","🅞","🅞","🅞","🅞","🅞","🅟","🅠","🅡","🅢","🅣","🅤","🅤","🅤","🅤","🅤","🅥","🅦","🅧","🅨","🅩",
"🅐","🅐","🅐","🅐","🅐","🅐","🅑","🅒","🅒","🅓","🅔","🅔","🅔","🅔","🅔","🅕","🅖","🅗","🅘","🅘","🅘","🅘","🅘","🅙","🅚","🅛","🅜","🅝","🅞","🅞","🅞","🅞","🅞","🅞","🅟","🅠","🅡","🅢","🅣","🅤","🅤","🅤","🅤","🅤","🅥","🅦","🅧","🅨","🅩",
"0","1","2","3","4","5","6","7","8","9"];

let font6 = ["🄰","🄰","🄰","🄰","🄰","🄰","🄱","🄲","🄲","🄳","🄴","🄴","🄴","🄴","🄴","🄵","🄶","🄷","🄸","🄸","🄸","🄸","🄸","🄹","🄺","🄻","🄼","🄽","🄾","🄾","🄾","🄾","🄾","🄾","🄿","🅀","🅁","🅂","🅃","🅄","🅄","🅄","🅄","🅄","🅅","🅆","🅇","🅈","🅉",
"🄰","🄰","🄰","🄰","🄰","🄰","🄱","🄲","🄲","🄳","🄴","🄴","🄴","🄴","🄴","🄵","🄶","🄷","🄸","🄸","🄸","🄸","🄸","🄹","🄺","🄻","🄼","🄽","🄾","🄾","🄾","🄾","🄾","🄾","🄿","🅀","🅁","🅂","🅃","🅄","🅄","🅄","🅄","🅄","🅅","🅆","🅇","🅈","🅉",
"0","1","2","3","4","5","6","7","8","9"];

let font7 = ["α","α","α","α","α","α","b","c","ç","d","є","є","є","є","є","f","g","н","i","i","i","i","i","j","k","l","м","и","σ","σ","σ","σ","σ","σ","ρ","q","я","s","т","υ","υ","υ","υ","υ","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];

let font8 = ["ᴀ","ᴀ","ᴀ","ᴀ","ᴀ","ᴀ","ʙ","ᴄ","ᴄ","ᴅ","ᴇ","ᴇ","ᴇ","ᴇ","ᴇ","ғ","ɢ","ʜ","ɪ","ɪ","ɪ","ɪ","ɪ","ᴊ","ᴋ","ʟ","ᴍ","ɴ","ᴏ","ᴏ","ᴏ","ᴏ","ᴏ","ᴏ","ᴘ","ǫ","ʀ","s","ᴛ","ᴜ","ᴜ","ᴜ","ᴜ","ᴜ","ᴠ","ᴡ","x","ʏ","ᴢ","0","1","2","3","4","5","6","7","8","9"];

let font9 = "SEM FONTE!!!"

let font10 = ["ɐ","ɐ","ɐ","ɐ","ɐ","ɐ","¨","ɔ","ɔ","ρ","ə","ə","ə","ə","ə","ɟ","ɓ","ɥ","ı","ı","ı","ı","ı","ɾ","ʞ","|","ɯ","ʋ","o","o","o","o","o","o","d","b","ɹ","s","ʇ","n","n","n","n","n","ʌ","ʍ","x","ʎ","z","0","1","2","3","4","5","6","7","8","9"];

let font11 = ["𝕒","𝕒","𝕒","𝕒","𝕒","𝕒","𝕓","𝕔","𝕔","𝕕","𝕖","𝕖","𝕖","𝕖","𝕖","𝕗","𝕘","𝕙","𝕚","𝕚","𝕚","𝕚","𝕚","𝕛","𝕜","𝕝","𝕞","𝕟","𝕠","𝕠","𝕠","𝕠","𝕠","𝕠","𝕡","𝕢","𝕣","𝕤","𝕥","𝕦","𝕦","𝕦","𝕦","𝕦","𝕧","𝕨","𝕩","𝕪","𝕫",
"𝔸","𝔸","𝔸","𝔸","𝔸","𝔸","𝔹","ℂ","ℂ","𝔻","𝔼","𝔼","𝔼","𝔼","𝔼","𝔽","𝔾","ℍ","𝕀","𝕀","𝕀","𝕀","𝕀","𝕁","𝕂","𝕃","𝕄","ℕ","𝕆","𝕆","𝕆","𝕆","𝕆","𝕆","ℙ","ℚ","ℝ","𝕊","𝕋","𝕌","𝕌","𝕌","𝕌","𝕌","𝕍","𝕎","𝕏","𝕐","ℤ",
"𝟘","𝟙","𝟚","𝟛","𝟜","𝟝","𝟞","𝟟","𝟠","𝟡"];

let font12 = ["𝚊","𝚊","𝚊","𝚊","𝚊","𝚊","𝚋","𝚌","𝚌","𝚍","𝚎","𝚎","𝚎","𝚎","𝚎","𝚏","𝚐","𝚑","𝚒","𝚒","𝚒","𝚒","𝚒","𝚓","𝚔","𝚕","𝚖","𝚗","𝚘","𝚘","𝚘","𝚘","𝚘","𝚘","𝚙","𝚚","𝚛","𝚜","𝚝","𝚞","𝚞","𝚞","𝚞","𝚞","𝚟","𝚠","𝚡",
"𝚢","𝚣","𝙰","𝙰","𝙰","𝙰","𝙰","𝙰","𝙱","𝙲","𝙲","𝙳","𝙴","𝙴","𝙴","𝙴","𝙴","𝙵","𝙶","𝙷","𝙸","𝙸","𝙸","𝙸","𝙸","𝙹","𝙺","𝙻","𝙼","𝙽","𝙾","𝙾","𝙾","𝙾","𝙾","𝙾","𝙿","𝚀","𝚁","𝚂","𝚃","𝚄","𝚄","𝚄","𝚄","𝚄","𝚅","𝚆","𝚇","𝚈","𝚉",
"𝟶","𝟷","𝟸","𝟹","𝟺","𝟻","𝟼","𝟽","𝟾","𝟿"];




if (fonte == '1') {
	let validCharacters = "aáâãàäbcçdeéêèëfghiíîìïjklmnoóõôòöpqrstuúûùüvwxyzAÁÂÃÀÄBCÇDEÉÊÈËFGHIÍÎÌÏJKLMNOÓÕÔÒÖPQRSTUÚÛÙÜVWXYZ0123456789";
	let result = "";
			for (var i = 0; i < originalText.length; i++) {
				let charAt = originalText.charAt(i);
				let indexOf = validCharacters.indexOf(charAt);
			if (indexOf != -1) {
				result+=font1[indexOf];
			} else {
				result+=charAt;
		}
	}
	message.channel.send(result);
}else if (fonte == '2') {
	let validCharacters = "aáâãàäbcçdeéêèëfghiíîìïjklmnoóõôòöpqrstuúûùüvwxyzAÁÂÃÀÄBCÇDEÉÊÈËFGHIÍÎÌÏJKLMNOÓÕÔÒÖPQRSTUÚÛÙÜVWXYZ0123456789";
	let result = "";
			for (var i = 0; i < originalText.length; i++) {
				let charAt = originalText.charAt(i);
				let indexOf = validCharacters.indexOf(charAt);
			if (indexOf != -1) {
				result+=font2[indexOf];
			} else {
				result+=charAt;
		}
	}
	message.channel.send(result);
}else if (fonte == '3') {
	let result = "";
	let validCharacters = "aáâãàäbcçdeéêèëfghiíîìïjklmnoóõôòöpqrstuúûùüvwxyzAÁÂÃÀÄBCÇDEÉÊÈËFGHIÍÎÌÏJKLMNOÓÕÔÒÖPQRSTUÚÛÙÜVWXYZ0123456789";
			for (var i = 0; i < originalText.length; i++) {
				let charAt = originalText.charAt(i);
				let indexOf = validCharacters.indexOf(charAt);
			if (indexOf != -1) {
				result+=font3[indexOf];
			} else {
				result+=charAt;
		}
	}
	message.channel.send(result);
}else if (fonte == '4') {
	let validCharacters = "aáâãàäbcçdeéêèëfghiíîìïjklmnoóõôòöpqrstuúûùüvwxyzAÁÂÃÀÄBCÇDEÉÊÈËFGHIÍÎÌÏJKLMNOÓÕÔÒÖPQRSTUÚÛÙÜVWXYZ0123456789";
	let result = "";
			for (var i = 0; i < originalText.length; i++) {
				let charAt = originalText.charAt(i);
				let indexOf = validCharacters.indexOf(charAt);
			if (indexOf != -1) {
				result+=font4[indexOf];
			} else {
				result+=charAt;
		}
	}
	message.channel.send(result);
}else if (fonte == '5') {
	let validCharacters = "aáâãàäbcçdeéêèëfghiíîìïjklmnoóõôòöpqrstuúûùüvwxyzAÁÂÃÀÄBCÇDEÉÊÈËFGHIÍÎÌÏJKLMNOÓÕÔÒÖPQRSTUÚÛÙÜVWXYZ0123456789";
	let result = "";
			for (var i = 0; i < originalText.length; i++) {
				let charAt = originalText.charAt(i);
				let indexOf = validCharacters.indexOf(charAt);
			if (indexOf != -1) {
				result+=font5[indexOf];
			} else {
				result+=charAt;
		}
	}
	message.channel.send(result);
}else if (fonte == '6') {
	let validCharacters = "aáâãàäbcçdeéêèëfghiíîìïjklmnoóõôòöpqrstuúûùüvwxyzAÁÂÃÀÄBCÇDEÉÊÈËFGHIÍÎÌÏJKLMNOÓÕÔÒÖPQRSTUÚÛÙÜVWXYZ0123456789";
	let result = "";
			for (var i = 0; i < originalText.length; i++) {
				let charAt = originalText.charAt(i);
				let indexOf = validCharacters.indexOf(charAt);
			if (indexOf != -1) {
				result+=font6[indexOf];
			} else {
				result+=charAt;
		}
	}
	message.channel.send(result);
}else if (fonte == '7') {
	let validCharacters = "aáâãàäbcçdeéêèëfghiíîìïjklmnoóõôòöpqrstuúûùüvwxyz0123456789";
	let result = "";
			for (var i = 0; i < originalText.length; i++) {
				let charAt = originalText.charAt(i);
				let indexOf = validCharacters.indexOf(charAt);
			if (indexOf != -1) {
				result+=font7[indexOf];
			} else {
				result+=charAt;
		} result = result + "̲̅";
	}
	message.channel.send('[' + result + ']');
}else if (fonte == '8') {
	let result = "";
	let validCharacters = "aáâãàäbcçdeéêèëfghiíîìïjklmnoóõôòöpqrstuúûùüvwxyz0123456789";
			for (var i = 0; i < originalText.length; i++) {
				let charAt = originalText.charAt(i);
				let indexOf = validCharacters.indexOf(charAt);
			if (indexOf != -1) {
				result+=font8[indexOf];
			} else {
				result+=charAt;
		}
	}
	message.channel.send(result);
}else if (fonte == '9') {
	let result = "";
			for (var i = 0; i < originalText.length; i++) {
				let charAt = originalText.charAt(i);
				result+=charAt;
				result = result + "̶";
	}
	message.channel.send(result);
}else if (fonte == '10') {
	let result = "";
	let validCharacters = "aáâãàäbcçdeéêèëfghiíîìïjklmnoóõôòöpqrstuúûùüvwxyz0123456789";
			for (var i = 0; i < originalText.length; i++) {
				let charAt = originalText.charAt(i);
				let indexOf = validCharacters.indexOf(charAt);
			if (indexOf != -1) {
				result+=font10[indexOf];
			} else {
				result+=charAt;
		}
	}
	let result2 = result.split("").reverse().join("");
	message.channel.send(result2);
}else if (fonte == '11') {
	let result = "";
	let validCharacters = "aáâãàäbcçdeéêèëfghiíîìïjklmnoóõôòöpqrstuúûùüvwxyzAÁÂÃÀÄBCÇDEÉÊÈËFGHIÍÎÌÏJKLMNOÓÕÔÒÖPQRSTUÚÛÙÜVWXYZ0123456789";
			for (var i = 0; i < originalText.length; i++) {
				let charAt = originalText.charAt(i);
				let indexOf = validCharacters.indexOf(charAt);
			if (indexOf != -1) {
				result+=font11[indexOf];
			} else {
				result+=charAt;
		}
	}
	message.channel.send(result);
}else if (fonte == '12') {
	let result = "";
	let validCharacters = "aáâãàäbcçdeéêèëfghiíîìïjklmnoóõôòöpqrstuúûùüvwxyzAÁÂÃÀÄBCÇDEÉÊÈËFGHIÍÎÌÏJKLMNOÓÕÔÒÖPQRSTUÚÛÙÜVWXYZ0123456789";
			for (var i = 0; i < originalText.length; i++) {
				let charAt = originalText.charAt(i);
				let indexOf = validCharacters.indexOf(charAt);
			if (indexOf != -1) {
				result+=font12[indexOf];
			} else {
				result+=charAt;
		}
	}
	message.channel.send(result);
}


// Aviso para mim, TERMINAR DE FAZER ISSO!!! SITE: https://www.pontodefusao.com/letras/
}
