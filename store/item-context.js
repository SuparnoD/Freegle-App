import { createContext, useReducer } from "react";

export const PostContext = createContext({
    posts: [],
    addPost: ({ user, title, type, quantity, description, photo }) => {},
  });
  
  function postReducer(state, action) {
    switch (action.type) {
      case 'ADD':
        const id = new Date().toString() + Math.random().toString();
        return [{ ...action.payload, id: id }, ...state];
      default:
        return state;
    }
  }
  
  function PostContextProvider({ children }) {
    const [postState, dispatch] = useReducer(postReducer);
  
    function addPost(postData) {
      dispatch({ type: 'ADD', payload: postData });
    }
  
    const value = {
      post: postState,
      addPost: addPost,
    };
  
    return (
      <PostContext.Provider value={value}>
        {children}
      </PostContext.Provider>
    );
  }
  
  export default PostContextProvider;