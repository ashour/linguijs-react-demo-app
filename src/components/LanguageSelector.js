import React from 'react';

function LanguageSelector({ language, onChangeLangage }) {
  function handleChange(event) {
    event.preventDefault();

    onChangeLangage(event.target.value);
  }

  return (
    <div className="select">
      <select onChange={handleChange} value={language}>
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
