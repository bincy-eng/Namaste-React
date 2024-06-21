import React from "react";
import Restaurentcard from "./Restaurentcard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  //Local state varible
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setsearchText] = useState([""]);

  // whenever state variable update, react triger a reconciliation cylce ie,re render the component
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.251354655339386&lng=75.78904408961535&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          placeholder="What you are looking for"
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredRes = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setListOfRestaurant(filteredRes);
            
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="btn btn-filter"
          onClick={() => {
            const filterdList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListOfRestaurant(filterdList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurentList) => (
          <Restaurentcard
            key={restaurentList.info.id}
            resData={restaurentList}
          />
        ))}
      </div>
    </div>
  );
};
export default Body;
