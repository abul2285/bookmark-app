import { rsf } from "../../firebase";

function* createUserSaga(email, password) {
  try {
    const user = yield call(
      rsf.auth.createUserWithEmailAndPassword,
      email,
      password
    );
    yield put(createUserSuccess(user));
  } catch (error) {
    yield put(createUserFailure(error));
  }
}
