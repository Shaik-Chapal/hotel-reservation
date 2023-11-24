import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";

import items from "../../mockData/items.json";
import showcaseImage from '../../assets/showcase1.jpg';
import "./ItemDetail.css";
import { GlobalContext } from "../../context/GlobalState";

const getItemDetail = (id) => items.filter((item) => item.id === id)[0];

function ItemDetail() {
  const params = useParams();
  const itemId = parseInt(params?.id);
  const item = !!itemId && getItemDetail(itemId);
  const { addItemToCartList, cart } = useContext(GlobalContext);
  const [isAdded, setIsAdded] = useState(
    cart.findIndex((c) => c.id === itemId) > -1
  );

  return (
    <div className="item-detail-container">
      <Link to="/"> &#8592; Back</Link>
      <div className="item-detail">
        <div className="item-detail-image">
        <img src={showcaseImage} alt="Item image" />
        </div>
        <div className="item-detail-info">
          <div className="item-brand" style={{ margin: "0px 10px" }}>
          Sophisticated Urban Boutique Elegance
          </div>
          <div className="item-name"></div>
          <div className="item-price">$121</div>

          <select className="item-size">
            <option value={"4"}> Total-4</option>
            <option value={"3"}> Total-3</option>
            <option value={"2"}> Total-2</option>
            <option value={"1"}>Total-1</option>
          </select>
          <button
            className="item-btn"
            disabled={isAdded}
            onClick={() => {
              addItemToCartList(item);
              setIsAdded(true);
            }}
          >
            {isAdded ? <Link to="/Login">Go to Cart</Link> : "Add"}
          </button>
          <p className="item-description">
          Immerse yourself in the dynamic city life at our sophisticated urban boutique haven. Situated in the heart of the bustling metropolis, our hotel presents chic rooms, contemporary amenities, and convenient access to premier shopping, dining, and entertainment. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
