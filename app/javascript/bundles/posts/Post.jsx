import React from 'react';

function formatDateTime(unixTimestamp) {
  return new Date(unixTimestamp * 1000).toLocaleString('en-US', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone });
}

const Post = ({ body, createdAt, title }) => {
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
      </div>
      <div className="card-footer text-muted">
        {formatDateTime(createdAt)}
      </div>
    </div>
  );
}

export default Post;