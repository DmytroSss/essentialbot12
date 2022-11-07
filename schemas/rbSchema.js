const mongoose = require('mongoose');
const config = require('../botconfig.json');

const rbSchema = new mongoose.Schema({
	userID: {type: String},
	timeout: {type: Number},
	reason: {type: String},
	rbGet: {type: Number},
});

const model = mongoose.model("RbSchema", rbSchema);

module.exports = model;