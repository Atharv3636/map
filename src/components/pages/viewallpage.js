import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ItemModal from "../ItemModal";
import "../pages/fstyle.css";

function getItemTitle(item) {
  return item?.title || item?.name || "Untitled";
}
function getItemDescription(item) {
  return (
    item?.description ||
    item?.about ||
    item?.history ||
    item?.origin ||
    item?.significance ||
    item?.location ||
    ""
  );
}

export default function ViewAllPage({ statesData }) {
  const { category, stateName } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);

  const formattedState = stateName.replace(/-/g, "_").toLowerCase();
  const data = statesData[formattedState];

  if (!data) return <h2>Loading...</h2>;

  // 🎯 Dynamic category selection
  let items = [];  
  const currentCategory = category.toLowerCase();
const tourism = data.tourism || [];
const featuredPlaces = tourism.slice(0, 3);
  console.log(featuredPlaces);
  

 switch (currentCategory) {
  case "tourism":
    items = data.tourism || [];
    break;

  case "culture":
    items = [...(data.culture || []), ...(data.festivals || [])];
    break;

  case "food":
    items = data.food || [];
    break;

  case "spirituality":
    items = data.spiritual || [];
    break;

  case "hidden festivals":
    items = data.hiddenfestivals || [];
    break;

  case "castles":
    items = data.castle || [];
    break;

  // case "featured":
  //   items = data.tourism || [];
  //   break;

  default:
    items = [];
}
// const food = data.food || [];
// const tourism = data.tourism || [];

  return (
    <div className="viewall-page">
      <h1 className="page-title">
        {category.toUpperCase()} in {stateName}
      </h1>

      <div className="food-grid">
  {items.length > 0 ? (
    items.map((item, index) => (
      <article key={index} className="food-card">
        <img src={item.image} alt={getItemTitle(item)} />
        <div className="food-card__content">
          <h3>{getItemTitle(item)}</h3>
          <p>{getItemDescription(item)}</p>
        </div>
      </article>
    ))
  ) : (
    <p>No items found</p>
  )}
</div>

      <ItemModal
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </div>
  );
}