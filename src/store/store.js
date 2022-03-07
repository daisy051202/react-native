import {createStore} from 'redux';

const initialState = {
  theme: 'light',
  color: 'dodgerblue',
};

const uiReducer = (state = initialState, action) => {
  if (action.type === 'SET_DARK_THEME') {
    return {
      ...state,
      theme: 'dark',
    };
  }
  if (action.type === 'SET_LIGHT_THEME') {
    return {
      ...state,
      theme: 'light',
    };
  }
  if (action.type === 'SET_COLOR') {
    return {
      ...state,
      color: action.color,
    };
  }
  if (action.type === 'SET_COLOR_DEFAULT') {
    return {
      ...state,
      color: 'dodgerblue',
    };
  }
  return state;
};

const store = createStore(uiReducer);

export default store;
