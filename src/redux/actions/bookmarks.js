import {
  REQUESTED_BOOKMARK,
  REQUESTED_BOOKMARK_SUCCEEDED,
  REQUESTED_BOOKMARK_FAILED,
  FETCH_BOOKMARKS
} from "../actionTypes";

export const requestBookmark = () => {
  return {
    type: REQUESTED_BOOKMARK
  };
};

export const requestBookmarkSuccess = payload => {
  return {
    type: REQUESTED_BOOKMARK_SUCCEEDED,
    payload
  };
};

export const requestBookmarkError = () => {
  return { type: REQUESTED_BOOKMARK_FAILED };
};

export const fetchBookmark = () => {
  console.log("fb");
  return {
    type: FETCH_BOOKMARKS
  };
};
