const { Episode } = require("../models");
const ModelCrud = require("./index");

const episodeController = new ModelCrud(Episode);

module.exports = episodeController;
