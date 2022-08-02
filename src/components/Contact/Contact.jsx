//styles
import styles from './Contact.module.css'

//img´s
import gitB from '../../img/gitB.svg'
import inB from '../../img/inB.svg'
import instaB from '../../img/instaB.svg'    

function Contact () {
    const s = styles;

    return(
        <div className={s.mainCon} id="contact">
            {/* ------------------------------------------- */}
            <div className={s.titleCon}>
                <div className={s.circle}></div>
                <h1>Contact</h1>
            </div>
            {/* ------------------------------------------- */}
            <div className={s.cardCon}>
                <div className={s.backCard}>
                    <h1>Contactame!</h1>

                    <div className={s.card}>
                        <div className={s.cardText}>
                            <p>Puedes enviarme un correo dando click
                               en el boton saludame o mandarme DM en
                               en cualquiera de mis redes sociales;
                               Sera un placer saludarte!
                            </p>
                        </div>
                        <div className={s.cardRedes}>
                            <img src={gitB} alt="github" />
                            <img src={inB} alt="likedin" />
                            <img src={instaB} alt="instagram" />
                        </div>
                        <div className={s.sayHi}>
                            <button>Saludame</button>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default Contact;