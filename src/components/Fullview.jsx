import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import ChampionInfo from './ChampionInfo'
import './Fullview.css'

function Fullview(props) {
    const params = useParams()
    const img = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${params.champ}_${params.id}.jpg`
    console.log(params);
    return (
        <div className="fullContainer">
            <img src={img} alt="" className='fullImage'/>
            <Link to={`/champions/${params.champ}`} element={<ChampionInfo/>} className="back">X</Link>
        </div>
    )
}

export default Fullview
