import React from "react";
import ReactPlayer from "react-player";
const WatchVideo = ({nowPlaying}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      {/* Video Title */}
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        Watch Video
      </h2>

      {/* Video Player Container */}
      <div className="w-full max-w-3xl aspect-video rounded-lg overflow-hidden shadow-md">
        <ReactPlayer
          url={nowPlaying}
          controls
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default WatchVideo;
