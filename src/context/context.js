import React, { useState } from "react";
import DataSongs from "../data/songs.json";

const SongsContext = React.createContext();

const SongsProvider = (props) => {
  const [song, setSong] = useState(DataSongs[0]);
  const handleSetSong = (idSong) => {
    const song = DataSongs.find((song) => idSong === song.id);
    if (!song) setSong(DataSongs[0]);
    else setSong(song);
  };
  return (
    <SongsContext.Provider
      value={{ song, handleSetSong, DataSongs }}
      {...props}
    ></SongsContext.Provider>
  );
};

const useSongs = () => {
  return React.useContext(SongsContext);
};

export { SongsContext, SongsProvider, useSongs };
