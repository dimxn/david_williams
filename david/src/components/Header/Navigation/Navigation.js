import React from 'react';
import "../Navigation/Navigation.css";

export const Navigation = () => {
  return (
    <nav className="menu">
        <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contacts">Contacts</a></li>
        </ul>
    </nav>
  )
}
