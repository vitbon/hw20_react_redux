import { CHANGE_MESSAGE, CHANGE_RETWEET, CHANGE_LIKE, ADD_POST } from "./types";
import store from "./store";

const initialStore = [
  {
    id: 3,
    name: "Anakin Skywalker",
    avatar: "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/skywalker-ava.jpg",
    nickname: "@anakin-batya",
    date: "14 mar.",
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/sw9_ReySabre-laser.jpg",
    message: 482,
    messageIsPressed: false,
    reTweet: 146,
    reTweetIsPressed: false,
    like: 529,
    likeIsPressed: false,
  },
  {
    id: 2,
    name: "Emperor Palpatine",
    avatar: "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/sheevPalpatine-ava.jpg",
    nickname: "@sheva-imperator",
    date: "17 apr.",
    content: "That woman could turn any Ewok into a Wookie.",
    image: "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/sw9_PadmeAmidala-pictol.jpg",
    message: 321,
    messageIsPressed: false,
    reTweet: 97,
    reTweetIsPressed: false,
    like: 784,
    likeIsPressed: false,
  },
  {
    id: 1,
    name: "Princess/General Leia Organa",
    avatar: "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/leiaOrgana-ava.jpg",
    nickname: "@princess-Leia",
    date: "25 sep.",
    content: "What if you took Han Solo and gave him no depth?",
    image: "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/sw9_PoeDameron-jet.jpg",
    message: 296,
    messageIsPressed: false,
    reTweet: 138,
    reTweetIsPressed: false,
    like: 754,
    likeIsPressed: false,
  },
];

function reducer (store = initialStore, action) {
  switch(action.type) {
    case ADD_POST: {
      console.log([...store, {...action.payload}]);
      return [{...action.payload}, ...store];
    }
    // case CHANGE_MESSAGE: {
    //   if (store[store.length-1].messageIsPressed) {
    //     store[store.length-1].message -= 1;
    //     store[store.length-1].messageIsPressed = !store[store.length-1].messageIsPressed;
    //   } else {
    //     store[store.length-1].message += 1;
    //     store[store.length-1].messageIsPressed = !store[store.length-1].messageIsPressed;
    //   }
    //   return [...store];
    // }
    // case CHANGE_RETWEET: {
    //   if (store[store.length-1].reTweetIsPressed) {
    //     store[store.length-1].reTweet -= 1;
    //     store[store.length-1].reTweetIsPressed = !store[store.length-1].reTweetIsPressed;
    //   } else {
    //     store[store.length-1].reTweet += 1;
    //     store[store.length-1].reTweetIsPressed = !store[store.length-1].reTweetIsPressed;
    //   }
    //   return [...store];
    // }
    // case CHANGE_LIKE: {
    //   if (store[store.length-1].likeIsPressed) {
    //     store[store.length-1].like -= 1;
    //     store[store.length-1].likeIsPressed = !store[store.length-1].likeIsPressed;
    //   } else {
    //     store[store.length-1].like += 1;
    //     store[store.length-1].likeIsPressed = !store[store.length-1].likeIsPressed;
    //   }
    //   return [...store];
    // }
  }
  return store;
}

export default reducer;

/*
    case CHANGE_MESSAGE: {
      if (store[store.length-1].messageIsPressed) {
        store[store.length-1].message -= 1;
        store[store.length-1].messageIsPressed = !store[store.length-1].messageIsPressed;
      } else {
        store[store.length-1].message += 1;
        store[store.length-1].messageIsPressed = !store[store.length-1].messageIsPressed;
      }
      return [...store];
    }
    case CHANGE_RETWEET: {
      if (store[store.length-1].reTweetIsPressed) {
        store[store.length-1].reTweet -= 1;
        store[store.length-1].reTweetIsPressed = !store[store.length-1].reTweetIsPressed;
      } else {
        store[store.length-1].reTweet += 1;
        store[store.length-1].reTweetIsPressed = !store[store.length-1].reTweetIsPressed;
      }
      return [...store];
    }
    case CHANGE_LIKE: {
      if (store[store.length-1].likeIsPressed) {
        store[store.length-1].like -= 1;
        store[store.length-1].likeIsPressed = !store[store.length-1].likeIsPressed;
      } else {
        store[store.length-1].like += 1;
        store[store.length-1].likeIsPressed = !store[store.length-1].likeIsPressed;
      }
      return [...store];
    }

 */