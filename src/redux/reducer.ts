import { combineReducers } from '@reduxjs/toolkit';
import { pokemonApi } from 'services/pokemon';
import GlobalRedux from './global';

const rootReducer = combineReducers({
  [GlobalRedux.name]: GlobalRedux.reducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
