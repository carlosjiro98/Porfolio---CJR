//css
import styles from './Nav.module.css'
import texts from '../../Texts/textEN.json'

function Nav () {

    let t = texts.Nav
    let s = styles

    return (
        <div className={s.mainCon}>

            <div className={s.btnsCon}>

                <div className={s.navBtn}>
                    <span className={s.s1}></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <h1>{t.About}</h1>
                </div>

                <div className={s.navBtn}>
                <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <h1>{t.Wrok}</h1>
                </div>

                <div className={s.navBtn}>
                <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <h1>{t.Contact}</h1>
                </div>

            </div>

        </div>
    )
}

export default Nav;