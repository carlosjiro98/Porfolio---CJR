import style from './Work.module.css'

//img
import one from '../../img/1.png'
import two from '../../img/2.png'
import three from '../../img/3.png'

function Work () {
    const s = style
    return(
        <div className={s.mainCon} id="work">
            
            <div className={s.titleCon}>
                <div className={s.circle}></div>
                <h1>Proyects</h1>
            </div>

            <div className={s.cardsCon}>

                <div className={s.card}>
                    <div className={s.infoCard}>
                        <h1>PokeApp</h1>
                        <div className={s.infoText}>
                            <p>PokeApp es una aplicacion de consultas auna api tanto externa como una propia
                                que conecta cons una base de datos, con lo que permite almacenar datos
                                introducidos por el usuario
                            </p>
                        </div>
                        <button>Ver Proyecto</button>
                    </div>
                    <div>
                        <img src={one} alt="one" />
                    </div>

                </div>

                <div className={s.card}>
                    <div className={s.infoCard}>
                        <h1>Duit</h1>
                        <div className={s.infoText}>
                            <p>PokeApp es una aplicacion de consultas auna api tanto externa como una propia
                                que conecta cons una base de datos, con lo que permite almacenar datos
                                introducidos por el usuario
                            </p>
                        </div>
                        <button>Ver Proyecto</button>
                    </div>
                    <div>
                        <img src={two} alt="two" />
                    </div>

                </div>

                <div className={s.card}>
                    <div className={s.infoCard}>
                        <h1>CoockIt</h1>
                        <div className={s.infoText}>
                            <p>PokeApp es una aplicacion de consultas auna api tanto externa como una propia
                                que conecta cons una base de datos, con lo que permite almacenar datos
                                introducidos por el usuario
                            </p>
                        </div>
                        <button>Ver Proyecto</button>
                    </div>
                    <div>
                        <img src={three} alt="three" />
                    </div>

                </div>


            </div>

        </div>
    );
}

export default Work;