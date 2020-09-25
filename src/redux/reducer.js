import { CHANGE_NAME, CHANGE_NICKNAME, CHANGE_CONTENT, CHANGE_IMAGE,
  CLICK_MESSAGE, CLICK_RETWEET, CLICK_LIKE, CHANGE_AVATAR, ADD_POST } from "./types";

import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import { useDispatch } from 'react-redux';

const initialStore = [
  {
    id: 1,
    name: "Anakin Skywalker",
    avatar: "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/skywalker-ava.jpg",
    nickname: "@anakin-batya",
    date: "14 mar.",
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/sw9_ReySabre-laser.jpg",
    message: { count: 482, isPressed: false },
    reTweet: { count: 146, isPressed: false },
    like: { count: 529, isPressed: false },
  },
  {
    id: 2,
    name: "Emperor Palpatine",
    avatar: "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/sheevPalpatine-ava.jpg",
    nickname: "@sheva-imperator",
    date: "17 apr.",
    content: "That woman could turn any Ewok into a Wookie.",
    image: "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/sw9_PadmeAmidala-pictol.jpg",
    message: { count: 321, isPressed: false },
    reTweet: { count: 97, isPressed: false },
    like: { count: 784, isPressed: false },
  },
  {
    id: 3,
    name: "Princess/General Leia Organa",
    avatar: "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/leiaOrgana-ava.jpg",
    nickname: "@princess-Leia",
    date: "25 sep.",
    content: "What if you took Han Solo and gave him no depth?",
    image: "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/sw9_PoeDameron-jet.jpg",
    message: { count: 296, isPressed: false },
    reTweet: { count: 138, isPressed: false },
    like: { count: 754, isPressed: false },
  },
  {
    id: 4,
    name: "",
    avatar: "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/dartWeider-ava.jpg",
    nickname: "",
    date: "",
    content: "",
    image: "",
    message: { count: 0, isPressed: false },
    reTweet: { count: 0, isPressed: false },
    like: { count: 0, isPressed: false },
  },
];

function reducer (store = initialStore, action) {
  switch(action.type) {
    case CHANGE_NAME: {
      store[store.length-1].name = action.payload;
      return [...store];
    }
    case CHANGE_NICKNAME: {
      return {
        ...store,
        nickname: action.payload,
      }
    }
  }
  return store;
}

export default reducer;