import React from "react";
import "./style/animal.scss";
import { dataAnimal } from "./../data";
const Animal = () => {
  return (
    <div className="animal__list">
      <div className="container">
        <div className="animal">
          {dataAnimal.map((item) => (
            <div className="animal__details">
              <img src={item.img} alt={item.name} srcset="" />
              <div className="name-animal">
                <h6>{item.name}</h6>
              </div>
              <div className="title-animal">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Animal;
