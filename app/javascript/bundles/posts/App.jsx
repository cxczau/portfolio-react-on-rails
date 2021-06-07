import React, { useReducer, useEffect } from 'react';

import Post from "./Post";
import PostsChannel from "./PostsChannel";

const POST_RECEIVED = "POST_RECEIVED";
const FETCH_POSTS_SUCCESSED = "FETCH_POSTS_SUCCESSED";

function reducer(state, action) {
  switch(action.type) {
    case POST_RECEIVED:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      }
      case FETCH_POSTS_SUCCESSED:
        return {
          ...state,
          posts: action.payload,
        }
    default:
      throw new Error(`${action.type} not defined in reducer`);
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, { posts: [] });

  const fetchPosts = () => {
    Rails.ajax({
      type: 'GET',
      url: '/posts.json',
      success: posts => dispatch({ type: FETCH_POSTS_SUCCESSED, payload: posts }),
      error: error => console.log("Error: GET /posts.json", error),
    });
  }

  const postReceived = (post) => {
    dispatch({ type: POST_RECEIVED, payload: post })
  }

  const connectionStateChanged = (isConnected) => {
    console.log('connectionStateChanged', isConnected);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="row m-2">
      <PostsChannel
        connectionStateChanged={connectionStateChanged}
        postReceived={postReceived}
      >
        {state.posts.map((post) => (
          <div className="col-4" key={post.id}>
            <Post key={post.id} {...post} />
          </div>
        ))}
      </PostsChannel>
    </div>
  );
}

export default App;