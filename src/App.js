import React, {Component} from 'react';
import Navbar from './Components/layout/Navbar';
import Search from './Components/Locations/Search';
import axios from 'axios';
import './App.css';

class App extends Component {

searchLocations = async locations =>{
  console.log(locations)
  const res = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${process.env.REACT_APP_API_KEY}`)
  console.log(res)
}

  render(){

    return (
      <div className="">
        <Navbar title='Weather App' />
        <div className="container flex">
            <Search searchLocations={this.searchLocations}/>
        </div>
        </div>
      );
  }

}



export default App;
