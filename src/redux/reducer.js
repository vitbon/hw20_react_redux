import { CHANGE_NAME, CHANGE_NICKNAME, CHANGE_CONTENT, CHANGE_IMAGE,
  CLICK_MESSAGE, CLICK_RETWEET, CLICK_LIKE, CHANGE_AVATAR, CHANGE_DATE, ADD_POST } from "./types";

const initialStore = [
  {
    id: 0,
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
    id: 1,
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
    id: 2,
    name: "Princess/General Leia Organa",
    avatar: "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/leiaOrgana-ava.jpg",
    nickname: "@princess-Leia",
    date: "25 aug.",
    content: "What if you took Han Solo and gave him no depth?",
    image: "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/sw9_PoeDameron-jet.jpg",
    message: { count: 296, isPressed: false },
    reTweet: { count: 138, isPressed: false },
    like: { count: 754, isPressed: false },
  },
];

function reducer (store = initialStore, action) {
  switch(action.type) {
    case CHANGE_NAME: {
      store[store.length-1].name = action.payload;
      return [...store];
    }
    case CHANGE_NICKNAME: {
      store[store.length-1].nickname = action.payload;
      return [...store];
    }
    case CHANGE_DATE: {
      store[store.length-1].date = 'test';
      return [...store];
    }
    case CHANGE_CONTENT: {
      store[store.length-1].content = action.payload;
      return [...store];
    }
    case CHANGE_IMAGE: {
      store[store.length-1].image = action.payload;
      return [...store];
    }

    case CLICK_MESSAGE: {
      if (store[store.length-1].message.isPressed) {
        store[store.length-1].message.count -= 1;
        store[store.length-1].message.isPressed = !store[store.length-1].message.isPressed;
      } else {
        store[store.length-1].message.count += 1;
        store[store.length-1].message.isPressed = !store[store.length-1].message.isPressed;
      }
      return [...store];
    }
    case CLICK_RETWEET: {
      if (store[store.length-1].reTweet.isPressed) {
        store[store.length-1].reTweet.count -= 1;
        store[store.length-1].reTweet.isPressed = !store[store.length-1].reTweet.isPressed;
      } else {
        store[store.length-1].reTweet.count += 1;
        store[store.length-1].reTweet.isPressed = !store[store.length-1].reTweet.isPressed;
      }
      return [...store];
    }
    case CLICK_LIKE: {
      if (store[store.length-1].like.isPressed) {
        store[store.length-1].like.count -= 1;
        store[store.length-1].like.isPressed = !store[store.length-1].like.isPressed;
      } else {
        store[store.length-1].like.count += 1;
        store[store.length-1].like.isPressed = !store[store.length-1].like.isPressed;
      }
      return [...store];
    }
    case CHANGE_AVATAR: {
      if (store[store.length-1].avatarID >= 3) store[store.length-1].avatarID = 0;
        else store[store.length-1].avatarID += 1;
      const avasURL = [
        "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/skywalker-ava.jpg",
        "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/sheevPalpatine-ava.jpg",
        "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/leiaOrgana-ava.jpg",
        "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/dartWeider-ava.jpg",
      ];
      store[store.length - 1].avatar = avasURL[store[store.length-1].avatarID];
      return [...store];
    };

  }
  return store;
}

export default reducer;