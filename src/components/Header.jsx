import React from 'react';
import {GrLanguage} from 'react-icons/gr';

//Home Button(Logo) and Language change button included
function Header() {
  return (
    <div className="HeaderContainer">
        <div className="Logo">
          <img className="LogoImg" src="/img/DB-logo.svg" alt="DBP" />
          <p className="LogoName">Deutsch-Bahn-Plan</p>
        </div>
        <div className="Language">
          <button select-lang="EN" className="LanguageBtn">
            <GrLanguage/>
          </button>
        </div>
    </div>
  )
}

export default Header