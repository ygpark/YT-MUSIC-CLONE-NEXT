"use client";
import React from "react";
import { IoMdPlayCircle } from "react-icons/io";

const PlayListNav = ({ playlist }) => {
  const { id, owner, playlistName, songList } = playlist;

  const onClickPlay = () => {
    //TODO: play music
  };

  return (
    <li
      className="mx-3 px-2 py-1 h-[56px] flex flex-row justify-between items-center 
    hover:bg-neutral-600 rounded-xl group"
    >
      <div className=" ">
        <div className="text-[14px]">{playlistName}</div>
        <div className="text-[12px] text-[rgba(255,255,255,0.7)]">{owner}</div>
      </div>
      <div
        className="hidden group-hover:block cursor-pointer"
        onClick={onClickPlay}
      >
        <IoMdPlayCircle size={24} />
      </div>
    </li>
  );
};

export default PlayListNav;
