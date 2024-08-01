// (site)/page.tsx
import React from "react";
import Category from "./components/Category";

const page = async () => {
  return (
    <div className="min-h-[600px]">
      <Category />
    </div>
  );
};

export default page;
