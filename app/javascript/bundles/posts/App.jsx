import React, { useReducer, useEffect } from 'react';

import Post from "./Post";
import PostsChannel from "./PostsChannel";
import ConnectionState from "./ConnectionState";

const POST_RECEIVED = "POST_RECEIVED";
const FETCH_POSTS_SUCCESSED = "FETCH_POSTS_SUCCESSED";
const CONNECTION_STATE_CHANGED = "CONNECTION_STATE_CHANGED";

function reducer(state, action) {
  switch (action.type) {
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
    case CONNECTION_STATE_CHANGED:
      return {
        ...state,
        connected: action.payload,
      }
    default:
      throw new Error(`${action.type} not defined in reducer`);
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, { posts: [], connected: false });

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
    dispatch({ type: CONNECTION_STATE_CHANGED, payload: isConnected });
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="row m-2">
      <ConnectionState connected={state.connected} />
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