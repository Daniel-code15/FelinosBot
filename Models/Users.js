const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	UserID: {
		type: String,
		default: "-"
	},
	Coins: {
		type: Number,
		default: 0
	},
	Pet: {
		type: String,
		default: "-"
	},
	Inv: {
		type: Map,
		default: null
	},
	Admin: {
		type: Boolean,
		default: false
	},
	Donator: {
		type: Boolean,
		default: false
	},
	Daily: {
		type: Number
	}

});





module.exports = mongoose.model("Users", UsersSchema);