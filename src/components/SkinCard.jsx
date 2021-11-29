import React from 'react'
import FullView from './Fullview'
import { Link } from 'react-router-dom'
import './SkinCard.css'

function SkinCard({champ, skinId, name}) {
    return (
        <div className='skin'>
            <h2>{name}</h2>
            <Link to={`/view/${champ}/${skinId}`} element={<FullView />}>
                <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ}_${skinId}.jpg`} alt="" />
            </Link>
        </div>
    )
}

export default SkinCard
