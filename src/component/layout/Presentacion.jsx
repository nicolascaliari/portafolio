import '../../style/components/layout/Presentacion.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons'
import yo from '../../img/L.png_small';



function Presentacion({ text, }) {
    const lenght = text.length;
    const deg = 360 / lenght;
  
    return (
      <div className="spinning-text-wrapper"> 
        <div className="spinning-text">
          
            {text.split("").map((letra, i) => (
              <span
                key={i}
                style={{
                  transform: `rotate(${deg * i}deg)`,
                }}
              > 
                 {letra} 
              </span>
            ))} 
          
        </div>
      <img className='img-yo' src={yo} />
      </div>
    );
  }

export default Presentacion;

