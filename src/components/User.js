import React from 'react';
import { Trans, DateFormat, Plural } from '@lingui/macro';

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
            <small>
              <Trans>
                Last seen{' '}
                <DateFormat
                  value={user.lastSeen}
                  format={{ weekday: 'short', hour: 'numeric', minute: 'numeric' }}
                />
              </Trans>
            </small>
          </p>

          <div className="tags">
            <span className="tag is-light">
              <Plural
                value={user.postCount}
                _0="No posts yet"
                one="# post"
                other="# posts"
              />
            </span>

            <span className="tag is-light">
              <Plural
                value={user.commentCount}
                _0="No comments yet"
                one="# comment"
                other="# comments"
              />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default User;
