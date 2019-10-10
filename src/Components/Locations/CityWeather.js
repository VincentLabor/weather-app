import React from 'react'
import Spinner from '../layout/Spinner';
import Sun from './sun.svg';

const CityWeather = ({city, country, currentTempMin, currentTempMax, temp, loading, showClass}) => {

    if (loading){
        return <Spinner/>
    }
    return (
        <div className={showClass ? "cityWeather" : null}>
            <img src={Sun} className='sun'/>
           {city && country && <p>Location: {city}, {country}</p> } {/*This allows us to conditionally show the traits of the city.*/}
           {currentTempMin && <p>Lows: {currentTempMin}</p> }
           {currentTempMax && <p>Highs: {currentTempMax}</p>}
           {temp&&<p>Current Temperature: {temp}</p>}
        </div>
    )
}

export default CityWeather;