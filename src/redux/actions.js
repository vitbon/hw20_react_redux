import { CHANGE_NAME, CHANGE_NICKNAME, CHANGE_CONTENT, CHANGE_IMAGE, CHANGE_AVATAR,
  CLICK_MESSAGE, CLICK_RETWEET, CLICK_LIKE, CHANGE_DATE, ADD_POST } from "./types";

const changeName = text => {
  return { type: CHANGE_NAME, payload: text }
}

const changeNickName = text => {
  return { type: CHANGE_NICKNAME, payload: text }
}

const changeDate = text => {
  return { type: CHANGE_DATE, payload: text }
}

const changeContent = text => {
  return { type: CHANGE_CONTENT, payload: text }
}

const changeImage = text => {
  return { type: CHANGE_IMAGE, payload: text }
}

const changeMessage = text => {
  return { type: CLICK_MESSAGE, payload: text }
}

const changeAvatar = text => {
  return { type: CHANGE_AVATAR, payload: text }
}

export { changeAvatar, changeName, changeNickName, changeDate, changeContent, changeImage, changeMessage  };
