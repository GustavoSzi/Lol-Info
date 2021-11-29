import React from 'react'
import ChampionCard from './ChampionCard'
import './ChampionArea.css'

function ChampionArea(props) {
    const champions = props.list

    return (
        <div className="area">
            {champions.map(champion =>{
                return <ChampionCard id={champion.id} name={champion.name} title={champion.title} key={champion.key} lore={champion.lore}/>
            })}
        </div>
    )
}

export default ChampionArea
