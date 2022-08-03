//style
import { useSelector } from 'react-redux'
import style from './LateralR.module.css'

function LateralR () {
    const showx = useSelector((state) => state.show)
    const s = style
    
    return (
        <div className={s.mainCon} style={ {opacity: showx} }>
            <div className={`${s.mailCon} ${showx === "1" ? s.animado : s.desanimado}`}>
                <a href="mailto:carlos.jiro.dev@gmail.com" target="_blank" rel="noopener noreferrer">
                    <p>carlos.jiro.dev@gmail.com</p>
                </a>
            </div>
        </div>
    )
}

export default LateralR