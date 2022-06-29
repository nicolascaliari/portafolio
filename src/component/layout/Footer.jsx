import '../../style/components/layout/Footer.css'
import '../../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram , faGithub , faLinkedin} from '@fortawesome/free-brands-svg-icons'
import React, {useRef} from "react";



function Footer(props) {
    const refFooter = useRef()
    return (
        <div className='contenedor-footer'>
            
                <div ref={refFooter} className='div-footerh'>
                    <h2>Nicolas Caliari</h2>
                </div>

                <div className='div-footerh'>
                    <h3>Buenos aires</h3>
                </div>

                <div className='div-footerh'>
                    <h4>nicolascaliari28@gmail.com</h4>
                </div>

                <div className='div-footerh'>
                    <h4>© Nicolas Caliari Theme. All Rights Reserved</h4>
                </div>

                <div className='footer-iconos'>
                    <a
                        href="https://www.linkedin.com/in/nicolas-caliari-628236236/"
                        >
                        <i><FontAwesomeIcon className='i' icon={faLinkedin} /> </i>
                    </a>


                    <a href="https://www.instagram.com/nicolascaliari/" >
                        <i>  <FontAwesomeIcon className='i' icon={faInstagram} /> </i></a>



                    <a href="https://github.com/nicolascaliari" >
                        <i>  <FontAwesomeIcon className='i' icon={faGithub} /> </i></a>
                </div>
            
        </div>

    )
};


export default Footer;