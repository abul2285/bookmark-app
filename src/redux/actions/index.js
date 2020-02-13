import { bookmarksRef } from "../../firebase";
import { FETCH_BOOKMARKS, ADD_BOOKMARKS } from "../actionTypes";

export const addBookmarkWithThunk = newBookmark => async () => {
  bookmarksRef.push().set(newBookmark);
};

export const addBookmarkWithSaga = payload => {
  return {
    type: ADD_BOOKMARKS,
    payload
  };
};

// export const fetchBookmarksWithThunk = () => async dispatch => {
//   bookmarksRef.on("value", snapshot => {
//     dispatch({
//       type: FETCH_BOOKMARKS,
//       payload: snapshot.val()
//     });
//   });
// };

export const fetchBookmarksWithSaga = () => {
  return {
    type: FETCH_BOOKMARKS
  };
};
export * from "./users";
export * from "./bookmarks";
