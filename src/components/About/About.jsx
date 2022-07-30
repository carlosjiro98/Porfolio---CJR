//css
import style from './About.module.css'
//text
//import text from '../../Texts/textEN.json'
//photo
import me from '../../img/me.png'
function About () {
    const s = style
    //const t = text.About

    return(
        <div className={s.mainCon}>

            <div className={s.infoAbout}>
                <div className={s.infoTitleCon}>
                    <div className={s.circle}></div>
                    <h1>About</h1>
                </div>
                <div className={s.infoTextCon}>
                    <p>Hola! mi nombre es Carlos Jiménez y mi pasion es desarrollar <span>aplicaciones web</span>, 
                       tanto del lado del back end como del front.
                       <br/><br/>
                       He tomado diversos cursos de 
                       desarrollo web y me encanta llevar a la practica lo aprendido y  siempre voy 
                       por mas. He trabajado en diversos proyectos personales, lo cual me ha permitido 
                       obtener conocimientos en tecnologias como: <span>React js, Node js, JavaScript</span>, 
                       Express entre otras, de igual forma me gusta diseñar en illustrator en mis 
                       tiempos libres.
                       <br/><br/>
                       Ah! y soy de México para el mundo!</p>
                </div>
            </div>

            <div className={s.photoBtnCon}>

                <div className={s.PBsecondary}>
                    <div className={s.photoCon}>
                        <img src={me} alt="just me" />
                    </div>
                    <div className={s.tech}>
                        <p>Tecnologies i work with:</p>
                    </div>
                    <div className={s.btnCon}>
                        <button>Resume</button>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}

export default About;