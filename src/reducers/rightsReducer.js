const initialStore = {
  stories: {
    create: true,
    reset: true
  }
};

function rightsReducer (store = initialStore, action) {
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

export default rightsReducer;