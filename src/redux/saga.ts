import { all } from 'redux-saga/effects';
import globalSagas from './global/globalSagas';

function* rootSaga() {
  yield all([globalSagas()]);
}

export default rootSaga;
