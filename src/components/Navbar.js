import React from "react";
import SpotifyIcon from "./SpotifyIcon";

const Navbar = () => {
  return (
    <div className="h-24 text-center text-white leading-[6rem] bg-slate-900">
      <SpotifyIcon style={{ margin: "0 auto", height: "6rem" }}></SpotifyIcon>
    </div>
  );
};

export default Navbar;
