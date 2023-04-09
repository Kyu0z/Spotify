import React from "react";

const DetailSongs = () => {
  return (
    <div className="col-span-1 p-3">
      <h2 className="text-cyan-500 font-bold">Now Playing</h2>
      <h2 className="text-neutral-400 text-2xl">Sing me to sleep</h2>
      <div className="m-auto mt-8 mb-8 w-[240px]">
        <img
          src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576"
          alt="img"
          className="w-full"
        />
      </div>
      <div className="flex justify-evenly items-center">
        <img
          src="https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a"
          alt="more"
          className="w-[70px] rounded-full"
        />
        <h2 className="text-2xl text-white">Alan Walkers</h2>
      </div>
    </div>
  );
};

export default DetailSongs;
