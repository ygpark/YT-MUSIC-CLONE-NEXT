"use client";
import React from "react";
import { CircleLoader } from "react-spinners";

const ErrorMessage = () => {
  return (
    <div className="flex flex-col gap-10 w-full h-[400px] justify-center items-center">
      <CircleLoader color="red" />
      <h1 className="text-8xl">Opps!</h1>
      <h2 className="text-4xl">잠시 후 다시 확인해 주세요.</h2>
    </div>
  );
};

export default ErrorMessage;
