import React, { useState, useEffect } from "react";
import axios from "axios";


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
      Header,
      <div>
          <h1>{nasaData.title}</h1>
          <h2>{nasaData.date}</h2>
      </div>
  );
}

export default Header;