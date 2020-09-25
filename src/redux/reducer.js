import { ADD_POST } from "./types";

const initialStore = {
  stories: {
    create: true,
    reset: true
  }
};


function Reducer (store = initialStore, action) {
  switch(action.type){
    case "CHANGE_STORIES_CREATE": {
      return {
        stories: {
          ...store.stories,
          create: action.create
        }
      }
    }
    default: {
      return store;
    }
  }
}

export default Reducer;




export const addTextReducer = (state= initialStore, action) => {
  switch (action.type) {
    case ADD_POST:
      return action.payload
  }
  return state;
}