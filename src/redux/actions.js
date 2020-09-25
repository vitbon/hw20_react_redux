import { CHANGE_NAME, CHANGE_NICKNAME, CHANGE_CONTENT, CHANGE_IMAGE,
  CLICK_MESSAGE, CLICK_RETWEET, CLICK_LIKE, CHANGE_AVATAR, ADD_POST } from "./types";

const changeName = text => {
  return {
    type: CHANGE_NAME,
    payload: text
  }
}

const changeNickName = text => {
  return {
    type: CHANGE_NICKNAME,
    payload: text
  }
}

export { changeName, changeNickName };