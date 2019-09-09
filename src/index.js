import React from 'react';
import ReactDOM from 'react-dom';
import { I18nProvider } from '@lingui/react';
import '../node_modules/bulma/css/bulma.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function LocalizedApp() {
  return (
    <I18nProvider language="en">
      <App />
    </I18nProvider>
  );
}

ReactDOM.render(<LocalizedApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
