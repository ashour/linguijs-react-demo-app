import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { I18nProvider } from '@lingui/react';
import '../node_modules/bulma/css/bulma.css';
import App from './App';

async function loadMessages(language) {
  return await import(`@lingui/loader!./locales/${language}/messages.json`);
}

function LocalizedApp() {
  const [catalogs, setCatalogs] = useState({})
  const [language, setLanguage] = useState('en');

  async function handleLanguageChange(language) {
    const newCatalog = await loadMessages(language);

    const newCatalogs = { ...catalogs, [language]: newCatalog };

    setCatalogs(newCatalogs);
    setLanguage(language);
  }

  return (
    <I18nProvider language={language} catalogs={catalogs}>
      <App
        language={language}
        onLanguageChange={handleLanguageChange}
      />
    </I18nProvider>
  );
}

ReactDOM.render(<LocalizedApp />, document.getElementById('root'));
