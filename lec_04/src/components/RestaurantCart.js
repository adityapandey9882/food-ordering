import { CDN_URL } from "../utils/constants";

const RestaurantCart= (props) => {
  const { resData } = props;
  // console.log(props);

  const {name,
        cuisines,
        avgRating,
        deliveryTime,
        costForTwo,
        cloudinaryImageId
      } = resData?.info;
  return (
      <div className="res-card" style ={{backgroundColor: "#f0f0f0"}}>
        <img className="res-logo" alt="res-logo" src={CDN_URL + cloudinaryImageId}/> 
            
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating} stars</h4>
          <h4>{deliveryTime} 29 minutes</h4>
          <h4>{costForTwo}</h4>
      </div>
  );
  };

  export default RestaurantCart