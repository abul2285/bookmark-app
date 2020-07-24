import { rsf } from "../../firebase";
import { takeLatest, call, put } from "redux-saga/effects";
import {
  FETCH_BOOKMARKS,
  ADD_BOOKMARKS,
  DELETE_BOOKMARKS,
} from "../actionTypes";
import {
  requestBookmark,
  requestBookmarkError,
  requestBookmarkSuccess,
} from "../actions/bookmarks";

function* addBookmarkAsync({ payload: { title, url } }) {
  const key = yield call(rsf.database.create, "bookmarks", {
    title,
    url,
  });
  // `key` is something like "-Kfn7EyLEoHax0YGoQr0"
}

function* deleteBookmarkAsync({ id }) {
  yield call(rsf.database.delete, `bookmarks/${id}`);
}

function* fetchBookmarkAsync() {
  try {
    yield put(requestBookmark());
    const Bookmarks = yield call(rsf.database.read, "bookmarks");
    yield put(requestBookmarkSuccess(Bookmarks));
  } catch (err) {
    yield put(requestBookmarkError());
  }
}

export default [
  takeLatest(ADD_BOOKMARKS, addBookmarkAsync),
  takeLatest(DELETE_BOOKMARKS, deleteBookmarkAsync),
  takeLatest(FETCH_BOOKMARKS, fetchBookmarkAsync),
];
