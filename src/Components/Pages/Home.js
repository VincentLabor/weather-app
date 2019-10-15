import React, { Fragment } from 'react'
import Search from '../Locations/Search'
import CityWeather from '../Locations/CityWeather'

const Home = (props) => {
    return (
        <Fragment>
            <Search/>
            <CityWeather city={this.props.city}/>
        </Fragment>
    )
}

export default Home
