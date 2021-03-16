import React, { useState, useEffect } from "react";
import "./Feed.css";
import { Avatar } from "@material-ui/core";

import CreateIcon from "@material-ui/icons/Create";
import InputOption from "../InputOption/InputOption";
import PanoramaOutlinedIcon from "@material-ui/icons/PanoramaOutlined";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import PostAddOutlinedIcon from "@material-ui/icons/PostAddOutlined";
import Post from "../Post/Post";
import { db } from "../../firebase";
import firebase from "firebase";

function Feed({ photoUrl }) {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "Dez Adkins",
      description: "This is a Test",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        {/* <Avatar photoUrl={photoUrl} /> */}
        <div className="feed__input">
          <CreateIcon />
          <form action="">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
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
      {/* Posts */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
