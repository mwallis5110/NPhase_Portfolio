import React, {useEffect} from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import Headshot1 from "../../assets/images/headshots/headshot1.png";
import Headshot2 from "../../assets/images/headshots/headshot2.png";
import Headshot3 from "../../assets/images/headshots/headshot3.png";
import Headshot4 from "../../assets/images/headshots/headshot4.png";

import "./bios.css";

export default function Bios() {
  const biosData = [
    { id: 1, img: Headshot1, name: "Firstname Lastname1" },
    { id: 2, img: Headshot2, name: "Firstname Lastname2" },
    { id: 3, img: Headshot3, name: "Firstname Lastname3" },
    { id: 4, img: Headshot4, name: "Firstname Lastname4" },
  ]; //data for each card

   useEffect(() => {
     Aos.init({ duration: 1500 });
   }, []);

  return (
    <div className="cardWrapper" data-aos="slide-left">
      {biosData.map((person) => {
        return (
          <div className="card">
            <div className="cardBody">
              <img className="headShot" src={person.img} alt="" />
              <h2 className="Name">{person.name}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}
