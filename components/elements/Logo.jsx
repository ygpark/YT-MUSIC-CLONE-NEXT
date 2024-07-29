"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import IconButton from "@/components/elements/IconButton";
import { IoMdClose } from "react-icons/io";

const Logo = ({ isInDrawer = false, onClickCloseButton = () => {} }) => {
  const { push } = useRouter();
  const onClickLogo = () => {
    push("/");
  };

  const onClickHamburgerMenu = () => {};

  return (
    <section className="flex flex-row items-center gap-3">
      {isInDrawer ? (
        <IconButton
          icon={<IoMdClose size="24" />}
          onClickHandler={onClickCloseButton}
        />
      ) : (
        <IconButton
          icon={<RxHamburgerMenu size="24" />}
          onClickHandler={onClickHamburgerMenu}
        />
      )}

      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image alt="Logo" width="100" height="30" src="/main-logo.svg" />
      </div>
    </section>
  );
};

export default Logo;
