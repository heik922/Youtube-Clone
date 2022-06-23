import React from "react";
import VideoItem from "./VideoItem";

// destructoring prop.videoList
const VideoList = ({ videoList, onVideoSelect }) => {
  const renderList = videoList.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;
