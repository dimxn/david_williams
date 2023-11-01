import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import "../../media.css";
import "../Header/Header.css";
import { Navigation } from './Navigation/Navigation';

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header">
        <div className="container">
            <div className="header__container">
                <h2 className="header__title">David Williams</h2>
                {isMobile ? (
                  <MobileMenu />
                ) : (
                  <Navigation />
                )}
            </div>
        </div>
    </header>
  );
}

const MobileMenu = () => {
  return (
    <Menu right width={'50%'}>
        <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contacts">Contacts</a></li>
        </ul>
    </Menu>
);
};
