import React from "react";

type VideoPlayerProps = {
  videoSrc: string; // Path to the video file
};

const VideoSplash: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
  return (
    <div className="relative">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSplash;
