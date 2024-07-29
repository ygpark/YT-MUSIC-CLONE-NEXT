"use client";
import React, { useState } from "react";
import Image from "next/image";
import ResponsiveText from "@/components/elements/ResponsiveText";
import UserAvatar from "@/components/UserAvatar";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Logo from "./elements/Logo";
import Navigator from "./elements/Navigator";

const HeaderDrawer = ({ children }) => {
  const [isOpen, SetIsOpen] = useState(false);

  return (
    <Drawer direction="left" open={isOpen} onOpenChange={SetIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-[240px] h-full">
        <div className="py-3">
          <div className="px-3">
            <Logo
              isInDrawer={true}
              onClickCloseButton={() => {
                SetIsOpen(false);
              }}
            />
          </div>
          <Navigator />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

const Header = ({ children }) => {
  return (
    <header className="relative top-0 w-full h-screen ">
      {/* Background Section */}
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
      {/* Search Section */}
      <section className="sticky bg-pink-700">
        <div className="h-[64px] flex flex-row justify-between items-center p-2">
          <article
            className="hidden lg:flex flex-row items-center h-[42px] min-w-[480px]
          bg-[rgba(50,50,50,50.14)] rounded-2xl px-[16px] gap-[16px] "
          >
            <FiSearch size={24} />

            <input
              type="text"
              placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
              className="h-full bg-transparent w-full"
              value=""
            />
          </article>
          <HeaderDrawer>
            <article className="lg:hidden">
              <Logo />
            </article>
          </HeaderDrawer>
          <article className="flex flex-row gap-4 items-center">
            <FaChromecast size={26} />
            <UserAvatar></UserAvatar>
          </article>
        </div>
      </section>
      {/* Contents Section */}
      <section>
        <div className="absolute">
          <ResponsiveText>
            Home asdfasdfasd asd asdfasdf asd as as dfasdf asdf asd as f
          </ResponsiveText>
        </div>
      </section>
    </header>
  );
};

export default Header;
