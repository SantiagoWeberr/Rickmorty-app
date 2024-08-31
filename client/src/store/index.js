import { configureStore } from  '@reduxjs/toolkit'
import getCharacter from "./reducers/getCharacter"
import { thunk } from 'redux-thunk'

const store = configureStore( {
    reducer:getCharacter,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});


export default store