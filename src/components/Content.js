import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components'

// Styles
const ContentStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img{
    width:70vw;
    border: 3px outset black;
  }

  p{
    width:60vw;
    font-size:1.3rem;
  }
`;


function Content () {

  const [nasaData, setNasaData] = useState([]);
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=J2vl4BfpMtjfJFYguA8tm3ZLrF5YjR7RTrH6FInk&date=2019-03-14")
      .then((response) => {
           setNasaData(response.data)
        })
          .catch((err) => {console.log(err)})
          
},[])

    return (
      <ContentStyles>
        <img alt="Nasa photo of the day" className="apod" src={nasaData.url}></img>
        <p>{nasaData.explanation}</p>
      </ContentStyles>

    )
}

export default Content