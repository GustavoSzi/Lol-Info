import React from 'react'
import './Welcome.css'
import Header from './Header'

function Welcome() {
    return (
        <>
        <Header/>
        <div className="welcome-container">
            <h1>Bem-vindo. Selecione acima a categoria desejada!</h1>
        </div>
        </>
    )
}

export default Welcome
