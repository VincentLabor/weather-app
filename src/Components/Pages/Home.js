import React, { Fragment } from 'react'
import Search from '../Locations/Search'
import CityWeather from '../Locations/CityWeather'

const Home = (props) => {
    return (
        <Fragment>
            <h1>Red</h1>
            <Search/>
            <CityWeather/>
        </Fragment>
    )
}

export default Home
