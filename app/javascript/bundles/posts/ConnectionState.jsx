import React from 'react';

const ConnectionState = ({ connected }) => {
  return (
    <div class={`alert text-center m-2 alert-${connected ? 'success' : 'danger'}`} role="alert">
      {connected ? "Connected to PostsChannel" : "Disconnected from PostsChannel"}
    </div>
  );
}

export default ConnectionState;