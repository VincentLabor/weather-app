import React, { Component } from 'react';
import Navbar from './Components/layout/Navbar';
import Search from './Components/Locations/Search';
import axios from 'axios'; // You have to install axios on your own.
import CityWeather from './Components/Locations/CityWeather';
import './App.css';

class App extends Component {

  state = { //This will represent the information that we wish to grab from the API.
    city: '',
    country: '',
    currentTempMin: '',
    currentTempMax: '',
    temp: '',
    loading: false
  }

  searchLocations = async locations => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${locations}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`) //Don't forget about the https://
    console.log(res)
    this.setState({
      city: res.data.name,
      country: res.data.sys.country,
      currentTempMin: res.data.main.temp_min,
      currentTempMax: res.data.main.temp_max,
      temp: res.data.main.temp,
      loading: false
    })
  }

  clearUsers = () => {
    this.setState({
      city: '',
      country: '',
      currentTempMin: '',
      currentTempMax: '',
      temp: '',
      loading: false
    })
  }

  render() {

    const { city, country, currentTempMax, currentTempMin, temp } = this.state;

    return (
      <div>
        <Navbar title='Weather App' />
        <div className="container flex">
          <Search searchLocations={this.searchLocations} showClear={city.length > 1 ? true : false} clearUsers={this.clearUsers}/>
          <CityWeather
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

}



export default App;
