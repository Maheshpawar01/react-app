import React from "react";
import Mountain1 from "../imges/talvolcano.jpg";
import Mountain2 from "../imges/nature1.jpg";
import Mountain3 from "../imges/nature4.jpg";
import Mountain4 from "../imges/nature3.jpg";
import "./DestinationStyle.css";
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Routs give you the opportunity to see a lot, with in a time frame.</p>
      <DestinationData
        className="first-des"
        heading="Tall Volcano, Batangas"
        text="Taal Volcano is a natural wonder that should be at the top of your
      travel list. This small but mighty active volcano is a sight to
      behold, with its unique features that make it truly one-of-a-kind.
      Imagine trekking up to the crater rim and looking down to see a
      stunning blue-green crater lake, steam rising up from the water's
      surface, and the surrounding mountains and lush greenery. It's a
      breathtaking view that you won't find anywhere else in the world.
      Whether you're a nature lover, an adventurer, or just looking for a
      unique experience, Taal Volcano has something to offer. It's not
      every day that you get the chance to witness a volcano up close and
      personal, and Taal Volcano is definitely worth the trip."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text=" If you're looking for an outdoor adventure that will take your breath away, Mt. Daguldul in Batangas, Philippines is the perfect destination for you. This majestic mountain offers a unique hiking experience that will challenge your physical abilities and reward you with stunning views of the surrounding landscape.

        The trek to the summit of Mt. Daguldul is a moderate one, with a trail that winds through lush green forests, over rocky terrain, and along pristine rivers. Along the way, you'll encounter diverse flora and fauna, including rare species of birds and butterflies."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
