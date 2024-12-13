import React from 'react'

import seriesData from "../api/SeriesData.json"
import SeriesCard from './SeriesCard'

const NetflixSeries = () => {
  return (
    // <ul>
    //     <li>
    //     <div>
    //         <img src={seriesData[0].img_url} alt=""
    //         width="40%" height="40%"/>
    //     </div>
    //     <h2>Name: {seriesData[0].name}</h2>
    // <h3>rating:{seriesData[0].rating}</h3>
    //     <p>Summary: { seriesData[0].description}</p>   //without using map method
    //     <p>Genre: {seriesData[0].genre}</p>
    //     <p> Cast: {seriesData[0].cast}</p>
    //     <a href={seriesData[0].watch_url} target='_blank'>
    //     <button>Watch Now</button>
    //     </a>
    //     </li>
     
    // </ul>


    <ul className='grid grid-three--cols'>
        {seriesData.map((curElem)=>{
       return <SeriesCard key = {curElem.id} curElem={curElem}/>
        })}
        

     </ul>
  )
}

export default NetflixSeries