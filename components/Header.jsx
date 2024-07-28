import React from "react";
import Image from "next/image";
import ResponsiveText from "@/components/elements/ResponsiveText";

const Header = ({ children }) => {
  return (
    <header className="relative top-0 w-full h-screen ">
      <section>
        <div className="absolute w-full h-full">
          <div className="absolute top-0 w-full h-full">
            <Image
              className="object-cover object-top w-full"
              alt="배경"
              src="/img/daldam music - 차.jpeg"
              fill
            />
          </div>
          <div className="absolute top-0 bg-gradient-to-t from-black w-full h-full"></div>
        </div>
      </section>
      <section>
        <div className="absolute top-0">
          <ResponsiveText>Home</ResponsiveText>
        </div>
      </section>
    </header>
  );
};

export default Header;
