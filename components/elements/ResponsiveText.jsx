/**
 * 사용법:
 *  <ResponsiveText>화면에 가득 채우고 싶은 단어</ResponsiveText>
 */
import React from "react";

const ResponsiveText = ({ children }) => {
  return (
    <div className="w-full flex">
      <div className="text-center" style={{ fontSize: "calc(100vw / 15)" }}>
        {children}
      </div>
    </div>
  );
};

export default ResponsiveText;
