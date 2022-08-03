//styles
import style from './Home.module.css'
import me from '../../img/me.png'


//text
import text from '../../Texts/textEN.json'
import { useEffect } from 'react'
import { useRef } from 'react'

//store
import { useDispatch } from 'react-redux'
import { show, showA, showW, showC } from '../../sotre/actions'

function Home () {
    const s = style
    const t = text.Home
    const mainConRef = useRef()
    const dispatch = useDispatch()

    useEffect(() => {
        function handleScroll () {
            const main = mainConRef.current
            const {bottom} = main.getBoundingClientRect()
            const tf = bottom <= 330 ? "1" : "0"
            const aOpacity = bottom <= 500 ? "1" : "0"
            const wOpacity = bottom <= -200 ? "1" : "0"
            const cOpacity = bottom <= -900 ? "1" : "0"
            dispatch(show(tf))
            dispatch(showA(aOpacity))
            dispatch(showW(wOpacity))
            dispatch(showC(cOpacity))
        }

        window.addEventListener("scroll", handleScroll)
        
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
        // eslint-disable-next-line
    }, [])

    return(
        <div ref={mainConRef} className={s.mainCon}>
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