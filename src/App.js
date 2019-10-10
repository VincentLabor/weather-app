import React, { useState } from 'react';
import Navbar from './Components/layout/Navbar';
import Search from './Components/Locations/Search';
import axios from 'axios'; // You have to install axios on your own.
import CityWeather from './Components/Locations/CityWeather';
import './App.css';
import Alert from './Components/layout/Alert';

const App = () => {

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [currentTempMin, setCurrentTempMin] = useState('');
  const [currentTempMax, setCurrentTempMax] = useState('');
  const [temp, setTemp] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, createAlert] = useState(null);

  const searchLocations = async locations => {
    setLoading(true);
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${locations}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`) //Don't forget about the https://
    console.log(res)
    setCity(res.data.name)
    setCountry(res.data.sys.country)
    setCurrentTempMin(res.data.main.temp_min)
    setCurrentTempMax(res.data.main.temp_max)
    setTemp(res.data.main.temp)
    setLoading(false)
  }

  const clearUsers = () => {
    setCity('');
    setCountry('');
    setCurrentTempMin('');
    setCurrentTempMax('');
    setTemp('');
    setLoading('false');
    createAlert(null);
    setLoading(false);
  }

  const setAlert = (type) => {
    createAlert(type)
  }

  return (
    <div>
      <Navbar title='Weather App' />
      <Alert alert={alert} />
      <div className="container flex">
        <Search searchLocations={searchLocations} showClear={city.length > 1 ? true : false} clearUsers={clearUsers} setAlert={setAlert} />
        <CityWeather
        loading={loading}
          city={city}
          country={country}
          currentTempMax={currentTempMax}
          currentTempMin={currentTempMin}
          temp={temp}
          showClass={city.length > 1 ? true : false}
        />
      </div>
    </div>
  );
}



export default App;
