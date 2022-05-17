import React from 'react';
import {MdLanguage} from 'react-icons/md';
import '../styles/header.scss';

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
            <MdLanguage className="LanguageIcon"/>
          </button>
        </div>
    </div>
  )
}

export default Header