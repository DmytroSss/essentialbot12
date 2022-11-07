const mongoose = require('mongoose');
const config = require('../botconfig.json');

const warnSchema = new mongoose.Schema({
	userID: {type: String},
	warnings: {type: [Object], required: true},
	warnsNumber: {type: Number, required: true},
});

const model = mongoose.model("warningSchema", warnSchema);

module.exports = model;