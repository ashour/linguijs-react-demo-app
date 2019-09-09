import React from 'react';

function User({ user }) {
  return (
    <article className="media">
      <figure className="media-left has-text-centered" style={{ width: '4rem' }}>
        <p className="image is-64x64 is-circle is-block-centered has-text-centered has-mb-0_5">
          <img src={user.avatar} alt="User avatar" />
        </p>
      </figure>

      <div className="media-content">
        <div className="content">
          <h3 className="is-size-5">{user.name}</h3>

          <p>
            <small>Last seen {user.lastSeen}</small>
          </p>

          <div className="tags">
            <span className="tag is-light">
              {user.postCount} posts
            </span>

            <span className="tag is-light">
              {user.commentCount} comments
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default User;
