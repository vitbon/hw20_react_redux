import {ADD_POST} from "./types";

const addText = ( text ) => {
  return {
    type: ADD_POST,
    payload: text
  }
}

export default addText;