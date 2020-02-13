import { all } from "redux-saga/effects";

import data from "./data";
import users from "./users";

export default function* rootSaga() {
  yield all([...data, ...users]);
}
