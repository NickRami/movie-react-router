import React from 'react'
import MediaCard from '../components/MediaCard'
import { useLoaderData, useParams } from 'react-router-dom'

const Page = () => {
   
  const {data} = useLoaderData()
  
  return (
    <>
    <MediaCard/>
  
    
    </>
  )
}






export default Page


export const LoaderPage = async ({params}) => { 
  const page = params.page || 1



  const options = {
      method: 'GET',
      headers: { 
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTRiYzA2MDY1MjZkYTg5Njk3ZDUwYmUxNmZiMGY5YyIsIm5iZiI6MTcyNjUxOTY2MS4zNjg0NzksInN1YiI6IjYyYWU4ZDIwZDM4YjU4MDA5MjhhNzYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JvW6AMUUURki94cO8jDlimpzxZ-o2YCLx2iR_kln6vk'
      }
    };
      const resp = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=${page}&sort_by=popularity.desc${import.meta.env.VITE_API_KEY}`,options)
      const data  = await resp.json()
      

    return {data};
}