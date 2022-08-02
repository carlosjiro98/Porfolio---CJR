//pdf
import resume from '../../docs/CV_Spanish.pdf'
function Resume () {
    return (
        <div style={{position: "absolute", width: "100%", height: "100%"}}>
            <object 
            data={resume} 
            type="application/pdf"
            width="100%"
            height="100%"
            >
                Error de carga
            </object>
        </div>
    )
}

export default Resume