import React from "react";
import './Ciudad.css'

export default function Ciudad({city}) {
    return (
       
        <div className="ciudad">
                <div className="container">
                    <div className="titulo">
                    <h2>{city.name}</h2>
                    <img className="animate__animated animate__swing" src={"http://openweathermap.org/img/wn/"+city.img+"@2x.png"} alt="imagen no encontrada"/>
                    </div>
                    <div className="info">

                        <p><span className="letra">T</span>emperatura:<span className="citi"> {city.temp} ºC </span></p>
                        <p><span className="letra">C</span>lima:  <span className="citi">{city.weather}</span></p>
                        <p><span className="letra">V</span>iento:  <span className="citi">{city.wind}km/h</span> </p>
                        <p><span className="letra">C</span>antidad de nubes:  <span className="citi">{city.clouds}</span></p>
                        <p><span className="letra">L</span>atitud:  <span className="citi">{city.latitud}º</span></p>
                        <p><span className="letra">L</span>ongitud:  <span className="citi"> {city.longitud}º</span></p>
                        
                    </div>
            </div>
        </div>
    )
}