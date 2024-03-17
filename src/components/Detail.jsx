import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

  

export const Detail = (props) => {
  const {vote_average,id, poster_path, title, overview,original_language
    , release_date, genres} = props.data;
  
  //console.log(props.data);
  //const recommendationList = movieRecom();
  //console.log(recommendationList.results);
  // Render movie details
      const [favourites, setFavourites] = useState([]);

      const addToFavourites = (input) => {
        console.log(input);
        
          const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites')) || [];
          
          // Check if the input movie already exists in favourites
          const isDuplicate = movieFavourites.some(movie => movie.id === input.id);
          
          if (!isDuplicate) {
            const newFavouriteList = [...movieFavourites, input];
            setFavourites(newFavouriteList);
            localStorage.setItem('react-movie-app-favourites', JSON.stringify(newFavouriteList));
          } else {
            // Handle duplicate movie here (optional)
            console.log('This movie is already in favourites!');
          }
        
        console.log(favourites);
      };      

function genreArrayExtracter(){
    let array = new Array();
    if (genres) {
        for (let i=0; i< genres.length; i++){ array[i] = genres[i].id;}
    }
    return array;
}
function recommendationQureyCreator(array){
    let returnValue = 'https://api.themoviedb.org/3/discover/movie?api_key=042aa4748de2bd655dc1224d9e6c6baa&with_genres=';
    for(let i=0; i<array.length; i++){
        if(i>0) returnValue += ",";
        returnValue += array[i]
    }
    return returnValue;
}

function recommendations(url){
    const [recReturn, setRecReturn] = useState([]);
    fetch(url)
    .then(response => response.json())
    .then(json => setRecReturn(json))
    .catch(err => console.error('error:' + err));
    return recReturn;
}

const recommend = recommendations(recommendationQureyCreator(genreArrayExtracter()));

  return (
    <>
    <div className='containerd flex m-5 ml-20 '  >
      <div className='imaged h-[300px] w-[300px] p-3'>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      </div>
      <div className='imgInfod p-5 h-[400px] w-[800px]  text-white'>
        <h1 className="mb-10 text-3xl font-bold">{title}</h1>
       <p>{release_date} <span className="px-4">{original_language}</span> </p>  
        <p>{overview}</p>
        {(genres)&&(<div className="inline-flex gap-4 justify-between m-5">
          {
            genres.map((gen, index)=>(
              <div className="p-2 rounded-2xl border-solid border-[0.01rem] text-[0.8rem] border-[black] h-10 overflow-hidden overflow-wrap-none" key={index}>{gen.name}</div>
            ))   
          }
          <div className="p-2 rounded-2xl border-solid border-[0.01rem] text-[0.8rem] border-[black]" > {vote_average} ⭐️</div>
</div>)}
 <div>
        <button className=" ml-4 p-2 bg-red-600 rounded-2xl border-[black]" onClick={()=>{addToFavourites(props.data)}}>Add To Favorites 🤍</button>
        </div>



      </div>
    </div>
    <div className="m-5 ml-20">
      <h2 className="mb-10  text-white mt-20 text-3xl font-bold pl-3 border-solid border-[0rem_0rem_0rem_1rem] border-[black] text-[2rem] " >Similar movies</h2>
    {
      (recommend.results) && (<nav className="grid m-3 grid-cols-4 ">{
        recommend.results.map((movie, index) => (
            (movie.id!=id)&&(
            <Link to={`/details/${movie.id}`} key={index} className="p-1" onClick={() => window.location.load(`/details/${movie.id}`)}>
              <img className="w-[15rem] p-1" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </Link>
            )
            ))
          } 
        </nav>
      )
    }
    </div>
    </>
  );
};