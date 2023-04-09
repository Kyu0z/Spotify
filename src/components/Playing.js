import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Playing = () => {
  return (
    <div>
      <AudioPlayer
        className="player-music"
        // src={song.url}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
      ></AudioPlayer>
    </div>
  );
};

export default Playing;
