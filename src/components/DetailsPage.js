import React, { useState } from "react";
import "../styles/DetailsPage.css";

import ItemModal from "./ItemModal";
import { useNavigate , useParams } from "react-router-dom";

export default function DetailsPage({ statesData }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const categories = ["Music", "Dance", "Art"];

  // ✅ GETTING URL PARAMS and NAVIGATE FUNCTION
  const { stateName } = useParams();




  const data = statesData[stateName];
  if (!data) {
  console.log("State not found:", stateName);
  console.log("Available keys:", Object.keys(statesData));
  return <h2>Loading...</h2>;
}
  

  return (
    <div className="details-page">


      {/* TITLE */}
      {/* <h1 className="details-title">{stateName.toUpperCase()}</h1> */}
      <h1 className="details-title">{stateName.charAt(0).toUpperCase() + stateName.slice(1)}</h1>
           

      {/* ABOUT */}
      <p className="details-about">{data?.about}</p>

      {/* ================= TOURISM ================= */}
      <h2>Tourism</h2>
      <div className="grid">
        {data?.tourism?.map((item, i) => (
          <div
            key={i}
            className="card"
            onClick={() => setSelectedItem(item)}
          >
            <img src={item.image} alt="" loading="lazy" />
            <h3>{item.title}</h3>
            <p>{item.history}</p>
          </div>
        ))}
      </div>

      {/* ================= CULTURE ================= */}

      <h2>Culture</h2>

      {categories.map((cat) => (
        <div key={cat}>
          <h2 style={{ textTransform: "capitalize" }}>{cat}</h2>

          <div className="grid">
            {data?.culture
              ?.filter((item) => item.category === cat)
              .map((item, i) => (
                <div
                  key={i}
                  className="card"
                  onClick={() => setSelectedItem(item)}
                >
                  <img src={item.image} alt="" />
                  <h3>{item.title}</h3>
                  <p>{item.origin}</p>
                </div>
              ))}
          </div>
        </div>
      ))}





      {/* ================= FESTIVALS ================= */}
      <h2>Festivals</h2>
      <div className="grid">
        {data?.festivals?.map((item, i) => (
          <div
            key={i}
            className="card"
            onClick={() => setSelectedItem(item)}
          >
            <img src={item.image} alt="" />
            <h3>{item.title}</h3>
            <p>{item.about}</p>
          </div>
        ))}
      </div>

      {/* ================= HiddenFestivals ================= */}

      <h2>Hidden Festivals</h2>
      <div className="grid">
        {data?.hiddenfestivals?.map((item, i) => (
          <div
            key={i}
            className="card"
            onClick={() => setSelectedItem(item)}
          >
            <img src={item.image} alt="" />
            <h3>{item.title}</h3>
            <p>{item.about}</p>
          </div>
        ))}
      </div>
      


      {/* ================= FOOD ================= */}
      <h2>Food</h2>
      <div className="grid">
        {data?.food?.map((item, i) => (
          <div
            key={i}
            className="card"
            onClick={() => setSelectedItem(item)}
          >
            <img src={item.image} alt="" />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>

      {/* ================= SPIRITUAL ================= */}
      <h2>Spiritual Places</h2>
      <div className="grid">
        {data?.spiritual?.map((item, i) => (
          <div
            key={i}
            className="card"
            onClick={() => setSelectedItem(item)}
          >
            <img src={item.image} alt="" />
            <h3>{item.name}</h3>
            <p>🛕 {item.deity}</p>
            <p>📍 {item.location}</p>
          </div>
        ))}
      </div>

      {/* ================= MODAL COMPONENT ================= */}
      <ItemModal
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </div>
  );
}