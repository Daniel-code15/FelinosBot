const mongoose = require("mongoose");

const GroupSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	GroupID: {
		type: String,
		default: "-"
	},
	Prefix: {
		type: String,
		default: "*"
	},
	CmdsChannel: {
		type: String,
		default: "-"
	}
});





module.exports = mongoose.model("Group", GroupSchema);