import React from 'react';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          This demo is a companion to a <strong>
            <a href="https://phrase.com/blog/">Phrase blog</a>
          </strong> article.{' '}
          Built with <a href="https://reactjs.org/">React</a>,{' '}
          <a href="https://bulma.io/">Bulma</a>,{' '}
          and <a href="https://lingui.js.org/index.html#">LinguiJS</a>.

        </p>
      </div>
    </footer>
  );
}

export default Footer;
