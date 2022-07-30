//styles
import style from './Home.module.css'
import me from '../../img/me.png'


//text
import text from '../../Texts/textEN.json'

function Home () {
    const s = style
    const t = text.Home

    return(
        <div className={s.mainCon}>
            <div className={s.infoCon}>
                <h1 className={s.spanCon}>
                    <span>{t.fName}</span>
                    <span>{t.lName}</span>
                    <span>{t.llname}</span>
                </h1>
                <h1 className={s.title}>{t.title}</h1>
            </div>
                
            <div className={s.photoCon}>
                <img src={me} alt="me" />
            </div>
        </div>
    );
}

export default Home;