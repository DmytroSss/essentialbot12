const mongoose = require('mongoose');
const config = require('../botconfig.json');

const codeSchema = new mongoose.Schema({
	userID: {type: String},
	code: {type: [Object]},
});

const model = mongoose.model("CodeSchema", codeSchema);

module.exports = model;