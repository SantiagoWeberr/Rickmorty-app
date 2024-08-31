const { Sequelize } = require("sequelize");
const {dbUser, dbName, dbPort, dbHost, dbPassword } = require("../utils/config");
const CharacterFactory = require("./Characters");//aca me traigo mi modelo para aplicarlo despues
const EpisodeFactory = require("./Episodes");

const sequelize = new Sequelize(
  `postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`
);

const Character = CharacterFactory (sequelize);// aca le inyecto sequelize a mi modelo y lo guardo en la const
const Episode = EpisodeFactory (sequelize);

Character.belongsToMany(Episode, {through:'CharacterEpisode'});// y aca lo utilizo para creale las relaciones.
Episode.belongsToMany(Character,{through:'CharacterEpisode'});

module.exports = {
    conn: sequelize,
    Character,
    Episode,
}