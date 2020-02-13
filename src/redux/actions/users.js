import {
  REQUEST_CTEATE_USER,
  REQUEST_CTEATE_USER_FAILED,
  REQUEST_CTEATE_USER_SUCCEEDED,
  CREATE_USER
} from "../actionTypes";

export const requestCreateUser = () => {
  return {
    type: REQUEST_CTEATE_USER
  };
};
export const requestCreateUserSuccess = payload => {
  console.log(payload);
  return {
    type: REQUEST_CTEATE_USER_SUCCEEDED,
    payload
  };
};
export const requestCreateUserError = payload => {
  console.log(payload);
  return {
    type: REQUEST_CTEATE_USER_FAILED,
    payload
  };
};

export const createUser = payload => {
  return {
    type: CREATE_USER,
    payload
  };
};
