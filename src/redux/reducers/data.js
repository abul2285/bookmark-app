import {
  FETCH_BOOKMARKS,
  REQUESTED_BOOKMARK_SUCCEEDED,
  REQUESTED_BOOKMARK_FAILED,
  REQUESTED_BOOKMARK
} from "../actionTypes";

const initialState = {
  bookmarks: [],
  loading: false,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED_BOOKMARK:
      return { ...state, loading: true, error: false };
    case REQUESTED_BOOKMARK_SUCCEEDED:
      return {
        ...state,
        bookmarks: action.payload,
        loading: false,
        error: false
      };
    case REQUESTED_BOOKMARK_FAILED:
      return { ...state, bookmarks: [], loading: false, error: true };
    // case FETCH_BOOKMARKS:
    //   return action.payload;
    default:
      return state;
  }
};
