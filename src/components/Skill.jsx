import React, {useState} from 'react'
import './Skill.css'

function Skill(props) {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
        isVisible: false
    })
    const [modal, setModal] = useState(false)

    return (
        <>
        <img src={`http://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/${props.icon}`} alt="" onMouseMove={(event)=>{
            let {pageX, pageY} = event
            setPosition({x: pageX, y: pageY, isVisible: true})
        }} onMouseLeave={() =>{
            setPosition({x: 0, y: 0, isVisible: false})
        }} onClick={()=>{
            setModal(true)
        }} />

        <div className='ability' style={{display: (position.isVisible ? 'block' : 'none'), top: position.y - 50, left: position.x + 20}}>
            <h1>{props.name}</h1>
            <p>Tempo de recarga: {props.cd} segundos</p>
            <p>{props.description}</p>
        </div>

        <div className='modal' style={{display: (modal ? 'block' : 'none')}}>
            <button 
            onClick={()=>{
                setModal(false)
            }}>X</button>

            <h1>{props.name}</h1>
            <p>Tempo de recarga: {props.cd} segundos</p>
            <p>Custo de mana/energia: {props.cost === 0 ? 'Sem custo' : props.cost}</p>
            <p className="desc">{props.description}</p>
            
        </div>
        </>
    )
}

export default Skill
