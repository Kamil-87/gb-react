import { createStore, combineReducers } from 'redux'
import { profileReducer } from './profile'
import {chatReducer} from "./chat";
import {messageReducer} from "./messages";

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    chat: chatReducer,
    message: messageReducer,
    }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
