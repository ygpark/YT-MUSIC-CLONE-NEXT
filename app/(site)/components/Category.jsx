"use client";

import React from "react";
import useUIState from "@/hooks/useUIState";
import { cn } from "@/lib/utils";
import { homeCategoryList } from "@/lib/dummyData";

const Category = () => {
  const { homeCategory, setHomeCategory, setHeaderImageSrc } = useUIState();

  const onClickCategory = (item) => {
    if (homeCategory === item.label) {
      setHeaderImageSrc("");
      setHomeCategory("");
    } else {
      setHeaderImageSrc(item.src);
      setHomeCategory(item.label);
    }
  };

  return (
    <div>
      Category
      <ul className="max-w-full overflow-x-auto flex flex-row gap-4">
        {homeCategoryList.map((item) => {
          return (
            <li
              key={item.label}
              onClick={() => onClickCategory(item)}
              className={cn(
                "h-[38px] min-w-fit px-3 flex flex-center justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.2)]  hover:bg-[rgba(144,144,144,0.45)] cursor-pointer",
                item.label === homeCategory &&
                  "bg-white text-black hover:bg-neutral-400"
              )}
            >
              {item.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
