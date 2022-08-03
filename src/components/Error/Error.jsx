//styles
import styles from './Error.module.css'

import { useNavigate } from 'react-router-dom'

function Error () {
    const navigate = useNavigate()
    const s =styles

    function handleBack () {
        navigate('./')
    }
    return (
        <div className={s.mainCon}>
            <h1>404</h1>
            <p>Oops! this page doesn't exist</p>
            <button onClick={handleBack}>Back to cool!</button>
        </div>
    )
}

export default Error