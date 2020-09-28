import React from "react";
import store from "../../redux/store";
import Post from "./post";

const pData = [
  {
    id: 1,
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
    likeIsPressed: false ,
  },
  {
    id: 3,
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
  }
];

let copyStore = store.getState();
pData.map(p => copyStore.push(p));



//export default pData;