//styles
import styles from './Lateral.module.css'

//img
import git from '../../img/git.svg'
import lin from '../../img/in.svg'
import insta from '../../img/insta.svg'

function Lateral () {
    const s = styles

    return (
        <div className={s.mainCon}>
            <h1>Lateral</h1>
            <img src={git} alt="github" />
            <img src={lin} alt="linkedin" />
            <img src={insta} alt="instagram" />
        </div>
    )
}

export default Lateral;