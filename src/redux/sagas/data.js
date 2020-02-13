import { rsf } from "../../firebase";
import { takeLatest, call, put } from "redux-saga/effects";
import { FETCH_BOOKMARKS, ADD_BOOKMARKS } from "../actionTypes";
import {
  requestBookmark,
  requestBookmarkError,
  requestBookmarkSuccess
} from "../actions/bookmarks";

function* addBookmark({ payload: { title, url } }) {
  const key = yield call(rsf.database.create, "bookmarks", {
    title,
    url
  });
  // `key` is something like "-Kfn7EyLEoHax0YGoQr0"
}

function* fetchBookmarkAsync() {
  try {
    console.log("saga");
    yield put(requestBookmark());
    const Bookmarks = yield call(rsf.database.read, "bookmarks");
    yield put(requestBookmarkSuccess(Bookmarks));
  } catch (err) {
    yield put(requestBookmarkError());
  }
}

export default [
  takeLatest(ADD_BOOKMARKS, addBookmark),
  takeLatest(FETCH_BOOKMARKS, fetchBookmarkAsync)
];
