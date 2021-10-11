import { all } from 'redux-saga/effects';
import GlobalRedux from './index';

const { actions } = GlobalRedux;

function* forumTopicRootSagas() {
  yield all([]);
}

export default forumTopicRootSagas;
