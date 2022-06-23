import React from "react";
import "./VideoItem.css";

const VideoItem = (props) => {
  return (
    <div
      onClick={() => {
        props.onVideoSelect(props.video);
      }}
      className="item video-item"
    >
      <img
        src={props.video.snippet.thumbnails.medium.url}
        className="ui image image-size"
      ></img>
      <div className="content">
        <div className="header">{props.video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
