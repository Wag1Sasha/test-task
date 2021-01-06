import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {ImgContainer} from '../styled-components/styledComponents'


export const PhotosPage =()=>{
  

  const [data,setData] = useState([])

    useEffect(()=>{
     fetch(`https://pixabay.com/api/?key=19776687-7c6cc257a41e8830f998f821c&q=${value}`)
    .then(res =>res.json())
    .then(data=>setData(data.hits))
    })


  let { value } = useParams()

  return(
    <div>
    {data.map(photo=>(
      <ImgContainer key={Math.random()}>
          <img src={photo.largeImageURL} width="300px" height="300px" alt='search'></img>
        </ImgContainer>
    ))}
    </div>
  )
}