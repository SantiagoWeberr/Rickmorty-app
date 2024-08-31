const axios = require("axios");
const { CHARACTER_URL, CHARACTER_URL_BY_ID } = require("../utils/config/urls");
const { v4: uuidv4 } = require("uuid");
const { Character, Episode } = require("../models/index");
const ModelCrud = require("./index");

class CharacterModel extends ModelCrud {
  constructor(model) {
    super(model);
  }
  getAll = async (req, res, next) => {
    try {
      const myCharacter = await this.model.findAll({
        include: {
          model: Episode,
        },
      }); //la busqueda en la base de datos
      const apiCharacters = await axios.get(CHARACTER_URL); //busqueda en la api
      //console.log(apiCharacters.data);
      const results = await apiCharacters.data.results; //respuesta de la api
      const filterApi = await results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          species: character.species,
          gender: character.gender,
          episode: character.episode.length, //la cantidad de episodios en la que aparece
          image:character.image,
          status: character.status,
          origin: character.origin.name,
        };
      });
      const unir = await filterApi.concat(myCharacter);
      res.send(unir);
    } catch (err) {
      console.error(err)
    }
  };
  addEpisodeToCharacter = async (req, res, next) => {
    try {
      const { characterId, episodeId } = req.params; //sacamos los id de la url
      const searchByIdDb = await this.model.findByPk(characterId); //buscamos en la DB el character con el id
      const result = await searchByIdDb.addEpisode(episodeId); //y aca le agregamos el episode id. el addEpisode sale del metodo add de sequelize.
      res.send(result);
    } catch (err) {
      throw new Error(`error ${err}`);
    }
  };
  getById = async (req, res, next) => {
    try {
      const characterId = req.params.id;
      if (characterId.includes("-")) {
        const myCharacter = await this.model.findByPk(characterId, {
          include: {
            model: Episode,
          },
        });
        return res.send(myCharacter);
      } else {
        const apiCharacterId = await axios.get(`${CHARACTER_URL_BY_ID}${characterId}`);
        const result = await apiCharacterId.data;
        const { id, name, species, episode, status, origin } = result;
        //console.log(id, name, species, episode);
        const final = {
          id: id,
          name: name,
          species: species,
          episode: episode.length,
          status:status,
          origin:origin.name,
        };

        return res.send(final);
      }
    } catch (err) {
      console.error(err)
    }
  };
}
const characterController = new CharacterModel(Character);

module.exports = characterController;
