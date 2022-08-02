//css
import styles from './Nav.module.css'
import texts from '../../Texts/textEN.json'
import { Link } from 'react-scroll'

function Nav () {

    let t = texts.Nav
    let s = styles

    return (
        <div className={s.mainCon}>

            <div className={s.btnsCon}>

            <Link to="about" spy={true} smooth={true} offset={30} duration={500}>
                    <div className={s.navBtn}>
                        <span className={s.s1}></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <h1>{t.About}</h1>
                    </div>
                </Link>

                <Link to="work" spy={true} smooth={true} offset={0} duration={500}>
                <div className={s.navBtn}>
                    <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <h1>{t.Wrok}</h1>
                    </div>
                </Link>

                <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
                    <div className={s.navBtn}>
                    <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <h1>{t.Contact}</h1>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Nav;