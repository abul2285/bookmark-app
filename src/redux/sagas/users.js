import { rsf } from "../../firebase";
import { takeLatest, put, call } from "redux-saga/effects";
import { CREATE_USER } from "../actionTypes";
import {
  requestCreateUser,
  requestCreateUserSuccess,
  requestCreateUserError
} from "../actions";

function* createUserSaga({ payload: { email, password } }) {
  try {
    put(requestCreateUser());
    console.log("rcu");
    const user = yield call(
      rsf.auth.createUserWithEmailAndPassword,
      email,
      password
    );
    console.log(user);
    yield put(requestCreateUserSuccess(user));
  } catch (error) {
    console.log("error");
    yield put(requestCreateUserError(error));
  }
}

export default [takeLatest(CREATE_USER, createUserSaga)];
