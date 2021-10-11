import { combineReducers } from '@reduxjs/toolkit';
import GlobalRedux from './global';

const rootReducer = combineReducers({
  [GlobalRedux.name]: GlobalRedux.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
