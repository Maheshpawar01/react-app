import React from "react";
import "./TripStyle.css";
import TripData from "./TripData";
import Trip1 from "../imges/nature5.jpg";
import Trip2 from "../imges/nature7.jpg";
import Trip3 from "../imges/nature5.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Your can discover unique destination using google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="Indonesia, officially the Republic of Indonesia,is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
        />

        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Malaysia is a Southeast Asian country that offers a unique blend of cultures, landscapes, and experiences. From bustling cities to stunning natural beauty, Malaysia has something for everyone."
        />

        <TripData
          image={Trip3}
          heading="Trip in France"
          text="France is a country with a rich cultural heritage, stunning architecture, world-famous cuisine, and a diverse landscape. Whether you're a history buff, a foodie, or an outdoor enthusiast, France has something to offer for everyone. "
        />
      </div>
    </div>
  );
}

export default Trip;
