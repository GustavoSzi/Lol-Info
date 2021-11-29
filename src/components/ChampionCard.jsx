import React from 'react'
import { Link } from 'react-router-dom'
import './ChampionCard.css'

function ChampionCard(props) {
    const img = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.id}_0.jpg`
    return (
        <Link to={`/champions/${props.id}`} className="card">
            <h2>{props.name}</h2>
            <h3>{props.title}</h3>
            <img src={img} alt={props.name} loading='lazy'/>
        </Link>
    )
}

export default ChampionCard
