import { useContext } from "react";
import { SongsContext } from "../context/context";

const DetailSongs = () => {
  const { song } = useContext(SongsContext);
  return (
    <div className="col-span-1 p-3">
      <h2 className="text-cyan-500 font-bold">Now Playing</h2>
      <h2 className="text-neutral-400 text-2xl">{song.name}</h2>
      <div className="m-auto mt-8 mb-8 w-[240px]">
        <img src={song.links.images[0].url} alt="img" className="w-full" />
      </div>
      <div className="flex justify-evenly items-center">
        <img
          src={song.links.images[1].url}
          alt="more"
          className="w-[70px] rounded-full"
        />
        <h2 className="text-2xl text-white">{song.author}</h2>
      </div>
    </div>
  );
};

export default DetailSongs;
