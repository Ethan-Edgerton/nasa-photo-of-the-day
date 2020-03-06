import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import logo from "../assets/NasaLogo.jpeg"

// Styles
const HeaderStyle = styled.div`
  width:100vw;
  height:200px;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin-bottom: 3rem;
  border: 2px solid black;

  h1{
    font-size: 3rem;
    margin: 0;
  }

  h2{
    font-size: 2rem;
    margin: 1rem 0 0 0;
  }
  .title{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img{
    width: 275px;
    margin-right:6rem;
  }
`;


function Header() {
    const [nasaData, setNasaData] = useState([]);
    useEffect(() => {
      axios.get("https://api.nasa.gov/planetary/apod?api_key=J2vl4BfpMtjfJFYguA8tm3ZLrF5YjR7RTrH6FInk&date=2019-03-14")
        .then((response) => {
             setNasaData(response.data)
          })
            .catch((err) => {console.log(err)})
            
  },[])

  return (
      <HeaderStyle>
        <img className="logo" src={logo}></img>
        <div className="title">
            <h1>{nasaData.title}</h1>
            <h2>{nasaData.date}</h2>
        </div>
      </HeaderStyle>
  );
}

export default Header;