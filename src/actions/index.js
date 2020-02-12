import { FETCH_TODOS } from "./types";
import { bookmarksRef } from "../firebase";

export const addBookmark = newToDo => async () => {
  // todosRef.push().set(newToDo);
  bookmarksRef.push().set(newToDo);
};

export const fetchBookmarks = () => async dispatch => {
  bookmarksRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};
