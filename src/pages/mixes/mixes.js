import React from "react";

import MixesComponent from "../../components/mixesComponent/mixesComponent";

import "./mixes.css";

export default function Mixes() {
  return (
    <div className="mixesPageWrapper">
      <h1 className="mixesTitle">Mixes</h1>
      <div className="beforeMixesWrapper">
        <h3 className="beforeTitle">
          A sample of mixes, before our team has mastered them
        </h3>
        <MixesComponent />
      </div>
      <div className="afterMixesWrapper">
        <h3 className="afterTitle">
          Those same mixes, after our team has mastered them
        </h3>
        <MixesComponent />
      </div>
    </div>
  );
}
