import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import BlueDot from "@material-ui/icons/FiberManualRecord";
import "./Widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <BlueDot />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Networked News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Networked App is fresh off the press!",
        "Welcome to my new Clone"
      )}
      {newsArticle(
        "The Morning After: Dyson's new laser-equipped vacuum",
        "A clean freak's dream"
      )}
      {newsArticle(
        "Samsung's 512GB DDR5 module is a showcase for the future of RAM",
        "It will deliver much higher speeds, capacity and power savings."
      )}
      {newsArticle(
        "The Justice Department is worried about an anime monopoly after the Sony deal",
        "Sony announced it was acquiring Crunchyroll in 2020"
      )}
      {newsArticle(
        "Apple claims iOS developers can bypass the App Store by creating web apps",
        "Build it yourself!"
      )}
      {newsArticle(
        "Slack Connect now lets you DM people outside your work bubble",
        "It could replace email for talking to colleagues outside your company."
      )}
    </div>
  );
}

export default Widgets;
