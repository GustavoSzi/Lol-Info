import React, {useState, useEffect} from 'react'
import Header from './Header'
import { useParams } from 'react-router'
import fetches from '../fetchApi';
import './ChampionInfo.css'
import Skill from './Skill'
import { Link } from 'react-router-dom'
import SkinCard from './SkinCard'

function ChampionInfo() {
    const params = useParams()
    const img = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${params.champ}_0.jpg`
    const [champion, setChampion] = useState({skills: [],})

    useEffect(() => {
        async function fetchChamp(){
            const championInfo = await fetches.fetchChampionInfo(params.champ) 
            setChampion(...championInfo)
            console.log(championInfo);
        }

        fetchChamp()
    })

    
    return (
        <>
        <Header />
        <section className="infos">
            <Link to={`/view/${params.champ}/0`}>
                <img src={img} alt="" />
            </Link>
            <section className="description">
                <h1>{params.champ}</h1>
                <h3>{champion.title}</h3>
                <p>{champion.lore}</p>

                <section id="skills">
                    <h2>Habilidades:</h2>
                    <div>
                        {champion.skills.map((skill, index) =>{
                            return <Skill icon={skill.image.full} name={skill.name} description={skill.description} cd={skill.cooldownBurn} key={index} cost={skill.costBurn}/>
                        })}
                    </div>
                    <p>Passe o mouse na habilidade ou clique para ver os detalhes</p>
                </section>
            </section>
        </section>
        
        <section className="skinsArea">
            
                {champion.id && champion.skins.filter(skin => skin.num !== 0).map(skin =>{
                    return <SkinCard champ={champion.id} skinId={skin.num} name={skin.name} key={skin.name}/>
                })}
            
        </section>
        </>
    )
}

export default ChampionInfo
