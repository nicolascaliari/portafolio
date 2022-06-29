import '../style/components/pages/ContactPage.css'

function ContactPage(props) {
    return (
        
        <div className='div-container'>  
            <div className="form-contacto">
                <form>

                    <input type="text" name="nombre" placeholder="Nombre" required />

                    <input type="email" name="email" placeholder="Correo" required />

                    <input type="text" name="asunto" placeholder="asunto" required />

                    <input type="number" name="telefono" placeholder="Telefono" required />

                    <input type="text" name="mensaje" placeholder="Mensaje" required />

                    <button className="boton-formulario">
                        Enviar
                    </button>
            
                </form>
            </div>
        
         </div>
    )
}

export default ContactPage;