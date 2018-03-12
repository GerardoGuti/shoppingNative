import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  PASSWORDCONF_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER,
  USERNAME_CHANGED,
  PHONE_CHANGED
} from '../actions/types';

const SCRATCH_STATE = {
    username: '',
    email: '',
    phone: '',
    password: '',
    passwordConf: '',
    error: '',
    loading: false,
};

export default (state = SCRATCH_STATE, action) => {
    switch (action.type) {
      case USERNAME_CHANGED:
        return { ...state, username: action.payload };
      case EMAIL_CHANGED:
        return { ...state, email: action.payload };
      case PHONE_CHANGED:
        return { ...state, phone: action.payload };
      case PASSWORD_CHANGED:
        return { ...state, password: action.payload };
      case PASSWORDCONF_CHANGED:
        return { ...state, passwordConf: action.payload };
      case LOGIN_USER:
        return { ...state, loading: true, error: '' };
      case LOGIN_USER_SUCCESS:
        return {
          ...state,
          ...SCRATCH_STATE,
          user: action.payload
        };
      case LOGIN_USER_FAIL:
        return { ...state, error: 'Authentication Failed.', password: '', loading: false };
      case LOGOUT_USER:
        return state;
      default:
      return state;
    }
  };
