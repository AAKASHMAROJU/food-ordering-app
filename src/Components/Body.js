import React, { useState } from "react";
import Search from "./Search";
import ItemContainer from "./ItemContainer";
import "./Body.css";
import { SWIGGY_API_URL } from "../utils/constants";
// import data from "../utils/mockData";

function Body() {
  const [curr_data, setData] = useState([]);
  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json_data = await data.json();
    // console.log(json_data);
    const dt =
      json_data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    console.log(dt);
    setData(dt);
  };

  useState(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Search setData={setData} data={curr_data}></Search>
      <div className="outerContainer">
        {curr_data.map((e) => {
          return <ItemContainer key={e.id} resData={e.info}></ItemContainer>;
        })}
      </div>
    </div>
  );
}

export default Body;
