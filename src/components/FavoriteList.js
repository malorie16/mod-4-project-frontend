import React from 'react'
import FavoriteCity from './FavoriteCity'
import { Link } from 'react-router-dom'




const FavoriteList = (props) => {
  const renderCities = () => {
    return props.favedCity.map((city) => {
      return <div><div className="city-name-fl"></div>
      <FavoriteCity favCityPage={props.favCityPage} city={city} id={city.id} clickedFavCity={props.clickedFavCity} /> </div>
    })
  }

    return(
      <div className="grid-container">
        {renderCities()}
      </div>
    )

}
export default FavoriteList
