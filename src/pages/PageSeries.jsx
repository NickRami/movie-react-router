import React from 'react'
import Series from './Series'
import { useLoaderData } from 'react-router-dom'

const Movie = () => {
    const {data: series} = useLoaderData()
    if (!series) {
      return <p>Cargando...</p>;
    }
  
    return (
      <div>
        {/* <h1>{series.name}</h1>
        <img src={`https://image.tmdb.org/t/p/w500${series.poster_path}`} alt={series.name} />
        <p>{series.overview}</p>
        <p><strong>Primera emisión:</strong> {series.first_air_date}</p>
        <p><strong>Géneros:</strong> {series.genres.map(genre => genre.name).join(', ')}</p> */}
      </div>
    );
 
}

export default Movie


export const loaderSeriesPage = async ({params}) => { 
  console.log(params);
  
  
  const options = {
    method: 'GET',
    headers: { 
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTRiYzA2MDY1MjZkYTg5Njk3ZDUwYmUxNmZiMGY5YyIsIm5iZiI6MTcyNjUxOTY2MS4zNjg0NzksInN1YiI6IjYyYWU4ZDIwZDM4YjU4MDA5MjhhNzYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JvW6AMUUURki94cO8jDlimpzxZ-o2YCLx2iR_kln6vk'
    }
  };

  const resp = await fetch(`https://api.themoviedb.org/3/tv/${params.id}language=en-US&page=1`,options)
  const data = await resp.json()
  console.log(data);
  
  return {data}
}