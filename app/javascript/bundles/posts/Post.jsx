import React from 'react';

function formatDateTime(unixTimestamp) {
  return new Date(unixTimestamp * 1000).toLocaleString('en-US', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone });
}

const Post = ({ body, createdAt, title }) => {
  return (
    <div className="card">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{body}</p>
      </div>
      <div class="card-footer text-muted">
        {formatDateTime(createdAt)}
      </div>
    </div>
  );
}

export default Post;