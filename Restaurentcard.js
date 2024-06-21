import React from "react";
import { CDN_URL } from "../utils/constants";

const Restaurentcard = (props) =>{
    const { resData } = props;
    //console.log(props)
    const {
      name,
      cuisines,
      costForTwo,
      avgRating,
      cloudinaryImageId
    }= resData?.info; //destructring
 return (
    <div className="res-card">
       <img alt="biriyani" src={CDN_URL+ cloudinaryImageId}/>
       <h3 className="restaurent">{name}</h3>
       <h4 className="food">{cuisines.join(",")}</h4>
       <h4 className="cost">{costForTwo}</h4>
       <h4 className="rating">{avgRating}Star</h4>
       
    </div>
 )
}

export default Restaurentcard