import { bookmarksRef } from "../../firebase";
import {
  FETCH_BOOKMARKS,
  ADD_BOOKMARKS,
  DELETE_BOOKMARKS,
} from "../actionTypes";

export const addBookmarkWithThunk = (newBookmark) => async () => {
  bookmarksRef.push().set(newBookmark);
};

export const addBookmarkWithSaga = (payload) => {
  return {
    type: ADD_BOOKMARKS,
    payload,
  };
};

export const deleteBookmarkWithSaga = (id) => {
  return {
    type: DELETE_BOOKMARKS,
    id,
  };
};

export const fetchBookmarksWithSaga = () => {
  return {
    type: FETCH_BOOKMARKS,
  };
};
export * from "./users";
export * from "./bookmarks";
