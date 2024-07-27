import React from "react";

const IconButton = ({ icon, onClickHandler = () => {} }) => {
  return (
    <div>
      <div
        className="flex justify-center items-center w-[36px] h-[36px] hover:bg-[rgba(144,144,144,0.4)] rounded-full cursor-pointer"
        onClick={onClickHandler}
      >
        {icon}
      </div>
    </div>
  );
};

export default IconButton;
