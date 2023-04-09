import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { SongsContext, useSongs } from "../context/context";

const Playing = () => {
  const { song, handleSetSong } = useSongs(SongsContext);
  const handleNext = () => {
    handleSetSong(song.id + 1);
  };
  const handlePrev = () => {
    handleSetSong(song.id - 1);
  };
  return (
    <div>
      <AudioPlayer
        className="player-music"
        src={song.url}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleNext}
        onClickPrevious={handlePrev}
        onEnded={handleNext}
      ></AudioPlayer>
    </div>
  );
};

export default Playing;
