import React from 'react';
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
const Home = () => {
  let [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?&api_key=614f55bfb49c082ed51d3c44d09c0258&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovie(data.results);
      });
  }, []);
  return (
    <div className='home'>
       <Carousel>
     {movie.map(items=>{
      return(
        
        <div>
            <img src={`https://image.tmdb.org/t/p/original/${items.backdrop_path}`} />
            <p className="legend">
              <h1>{items.title}</h1>
              <p>{items.overview}</p>
              <strong>{items.vote_average}</strong>
            </p>
        </div>
        
      )
     })}
     </Carousel>
    </div>
  );
}

export default Home;
