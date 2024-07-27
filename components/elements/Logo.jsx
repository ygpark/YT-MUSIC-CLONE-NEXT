"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import IconButton from "@/components/elements/IconButton";

const Logo = () => {
  const { push } = useRouter();
  const onClickLogo = () => {
    push("/");
  };

  const onClickHamburgerMenu = () => {};

  return (
    <section className="flex flex-row items-center gap-3">
      <IconButton
        icon={<RxHamburgerMenu size="24" />}
        onClickHandler={onClickHamburgerMenu}
      />

      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image alt="Logo" width="100" height="30" src="/main-logo.svg" />
      </div>
    </section>
  );
};

export default Logo;
