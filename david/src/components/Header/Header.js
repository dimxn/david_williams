import React from 'react'
import "../Header/Header.css"
import { Navigation } from './Navigation/Navigation'

export default function Header() {
  return (
    <header className="header">
        <div className="container">
            <div className="header__container">
                <h2 className="header__title">David Williams</h2>
                <Navigation/>
            </div>
        </div>
    </header>
  )
}
