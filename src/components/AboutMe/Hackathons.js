import Fade from "react-reveal/Fade";
import HackathonCard from "./HackathonCard";
import React from "react";
import hackathonsData from "../../data/hackathons.json";

export default function Hackathons() {
  return (
    <div className="mb-8 mt-20">
      <Fade up>
        <div>
          <h1 className="heading-main mb-8">Achievements</h1>
        </div>
      </Fade>
      <Fade up>
        <div className="flex flex-wrap w-full justify-center">
          {hackathonsData.map((hackathon, index) => (
            <HackathonCard hackathon={hackathon} key={index} />
          ))}
        </div>
      </Fade>
    </div>
  );
}
