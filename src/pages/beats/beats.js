import React from "react";

import "./beats.css";

export default function Beats() {
  return (
    <div className="beatsWrapper" id="beatsId">
      <h1 className="beatsTitle">Beats</h1>
      <div className="airbitPlaceholder">
        <iframe
          id="mfs_html5"
          title="Beats"
          src="https://airbit.com/widgets/html5/?uid=670189&config=1365428"
          width="750"
          height="510"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}
