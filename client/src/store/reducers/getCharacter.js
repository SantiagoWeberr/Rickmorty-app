import { GET_CHARACTERS, GET_BY_ID } from "../actions/characterActions";

const initialState = {
  characters: [],
  characterDetail:[]
};

const getCharacter = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    case GET_BY_ID:
      return {
        ...state,
        characterDetail:action.payload,
      }
    default:
      return {
        ...state,
      };
  }
};

export default getCharacter;
