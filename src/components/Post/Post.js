import { Avatar } from "@material-ui/core";
import React from "react";
import InputOption from "../InputOption/InputOption";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import CommentIcon from "@material-ui/icons/Comment";
import SendIcon from "@material-ui/icons/Send";
import CallMadeIcon from "@material-ui/icons/CallMade";
import "./Post.css";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar photoUrl={photoUrl} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={CommentIcon} title="Comment" color="gray" />
        <InputOption Icon={CallMadeIcon} title="Share" color="gray" />
        <InputOption Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;
