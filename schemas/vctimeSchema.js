const mongoose = require('mongoose');
const config = require('../botconfig.json');

const vctimeSchema = new mongoose.Schema({
	userID: {type: String},
	vctime: {type: Number},
});

const model = mongoose.model("VCTimeSchema", vctimeSchema);

module.exports = model;