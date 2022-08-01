//styles
import styles from './Lateral.module.css'

//img
import git from '../../img/git.svg'
import lin from '../../img/in.svg'
import insta from '../../img/insta.svg'


import { useSelector } from 'react-redux'


function Lateral () {
    const s = styles
    const showx = useSelector((state)=> state.show)

    return (
        <div className={`${s.mainCon} `} style={ {opacity: showx} }>
            <div className={`${s.imgCon} ${showx === "1" ? s.animado : s.desanimado}`}>
                <img src={git} alt="github" onClick={()=>alert("hola")} />
                <img src={lin} alt="linkedin" />
                <img src={insta} alt="instagram" />
            </div>
        </div>
    )
}

export default Lateral;

/* import classes from './Pill.module.scss';

const Pill = ({texto, estilo, onEventoClick, disabled, estadoX, key}) => {
    return (
        <span key={key} className={[classes.pill] [classes[estilo]]} onClick={onEventoClick} disabled={disabled}>
            {texto} {estadoX && <IoClose />}
        </span>
    )
} */