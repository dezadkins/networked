import React from "react";
import InfoIcon from "@material-ui/icons/Info";

import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Networked News</h2>
        <InfoIcon />
      </div>
    </div>
  );
}

export default Widgets;
