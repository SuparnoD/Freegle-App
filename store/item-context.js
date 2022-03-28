import { createContext, useReducer } from "react";

const DUMMY_POSTS = [
  {
    title: "Logitech Z207 Speakers",
    type: "offer",
    quantity: 2,
    description: "2 speakers for pc with bluetooth aswell blah blah",
  },
  {
    title: "Lenovo IdeaPad",
    type: "offer",
    quantity: "1",
    description: "a laptop?",
  },
];

export const PostContext = createContext({
    posts: [],
    addPost: ({ title, type, quantity, description }) => {},
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
    const [postState, dispatch] = useReducer(postReducer, DUMMY_POSTS);
  
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