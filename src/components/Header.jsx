import React from 'react'
import './Header.css'
import champs from '../assets/img/champs.png'
import runes from '../assets/img/runes.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
        <header>
            <nav className="nav">
                <Link to='/champions' className="icon">
                    <img src={champs} alt="" />
                    <h3>Campeões</h3>
                </Link>
                
                <h1>League <br /> Info</h1>
                <Link to='/items' className="icon">
                    <img src={runes} alt="" />
                    <h3>Runas e itens</h3>
                </Link>
                
            </nav>
        </header>
        <div className='line'></div>
        </>
    )
}

export default Header
