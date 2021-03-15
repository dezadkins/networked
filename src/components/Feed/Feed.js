import React from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "../InputOption/InputOption";
import PanoramaOutlinedIcon from "@material-ui/icons/PanoramaOutlined";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import PostAddOutlinedIcon from "@material-ui/icons/PostAddOutlined";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form action="">
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption
            Icon={PanoramaOutlinedIcon}
            title="Photo"
            color="#70B5F9"
          />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#7FC15E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#E7A33E" />
          <InputOption
            Icon={PostAddOutlinedIcon}
            title="Write Article"
            color="#F5987E"
          />
        </div>
      </div>
    </div>
  );
}

export default Feed;
