import axios from 'axios';
import { CHARACTER_BY_ID_URL, CHARACTER_URL } from '../../constants';

export const GET_CHARACTERS = 'GET_CHARACTER';
export const GET_BY_ID = 'GET_BY_ID';


export function getCharacters(){
    return async function(dispatch){
        try {
        const response = await axios.get(CHARACTER_URL)
        return dispatch({
            type: GET_CHARACTERS,
            payload: response.data,
        })
    }catch(error){
        console.error('Error fetching characters:',error)
    }
}
}
export function getById (characterId) {
    return async function(dispatch){
        try{
            const response = await axios.get(`${CHARACTER_BY_ID_URL}${characterId}`)
            return dispatch({
                type:GET_BY_ID,
                payload:response.data
            })
        }catch(error){
            console.error(error)
        }
    }
}