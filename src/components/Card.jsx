import React from 'react';
import './Card.css';
import { Link} from 'react-router-dom';

export default function Card ({min, max, name, img, onClose, id}) {
 
    return (
          
      <div className="carta">
            <button onClick={onClose} className="boton">X</button>
            <Link to={`/ciudad/${id}`} >  <h1 className="card-title">{name}</h1>  </Link>
              
              
        <div className="container">   
          
              <div>
               <p>Min</p>
                <p>{min}°</p>
              </div>

              <div>
                <p>Max</p>
                <p>{max}°</p>
              </div>

            </div>
            <div>
              <img className="animate__animated animate__swing" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} alt="imagen no encontrada"/>
              </div>
          
        </div>
      
      
    );
};
