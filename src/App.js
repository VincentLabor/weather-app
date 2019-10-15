import React, { useState, Fragment } from 'react';
import Navbar from './Components/layout/Navbar';
import axios from 'axios'; // You have to install axios on your own.
import Home from './Components/Pages/Home';
import Search from './Components/Locations/Search';
import CityWeather from './Components/Locations/CityWeather';
import './App.css';
import Alert from './Components/layout/Alert';
import About from './Components/Pages/About';
import { BrowserRouter as Router, Switch, Link, Route, render } from 'react-router-dom';

const App = () => {

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [currentTempMin, setCurrentTempMin] = useState('');
  const [currentTempMax, setCurrentTempMax] = useState('');
  const [temp, setTemp] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

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

  const createAlert = (type) => {
    createAlert(type)
  }

  return (
    <Router>
      <div>
        <Navbar title='Weather App' />
        <Alert alert={alert} />
        <div className="container flex">
          <Switch>
            <Route exact path='/' /*component={Home}*/ render={props => (
              <Fragment>
                <Search clearUsers={clearUsers} searchLocations={searchLocations} setAlert={setAlert} />
                <CityWeather city={city} country={country} currentTempMin={currentTempMin} currentTempMax={currentTempMax} temp={temp} loading={loading} />
              </Fragment>
            )} />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}



export default App;
