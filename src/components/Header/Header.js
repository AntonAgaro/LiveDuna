import React from 'react';
import './Header.scss';
import title from './LiveDune.png'

const Header = props => {
  return (
    <header className="header">
      <img className="header__title" src={title} alt="title"/>
      <div className="header__buttons">
        <div className="header__text">У вас нет аккаунта?</div>
        <button className="header__btn">Регистрация</button>
      </div>
    </header>
  )
}

export default Header;