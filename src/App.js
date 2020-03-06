import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [nasaData, setNasaData] = useState([]);
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=J2vl4BfpMtjfJFYguA8tm3ZLrF5YjR7RTrH6FInk&date=2019-03-14")
      .then((response) => {
        //   console.log(response)
           setNasaData(response.data)
        })
          .catch((err) => {console.log(err)})
},[])
  return (
    <div className="App">
      <div className="container">
        <div className="sub-container">
          <div className="header"> 
          <Header />
          
          </div>
          <div className="content">
            <h2>{nasaData.date}</h2>
            <img className="apod" src={nasaData.url}></img>
            <p>{nasaData.explanation}</p>
          </div>
      </div>
    </div>
    {console.log(nasaData)}
  </div>
  );
}

export default App;
