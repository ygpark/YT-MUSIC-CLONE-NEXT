"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import ResponsiveText from "@/components/elements/ResponsiveText";
import UserAvatar from "@/components/UserAvatar";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Logo from "./elements/Logo";
import Navigator from "./elements/Navigator";
import { cn } from "@/lib/utils";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      setIsScrolled(scrollValue > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="relative top-0 w-full min-h-screen ">
      {/* Background Section */}
      <section>
        <div className="absolute w-full h-full">
          <div className="absolute top-0 w-full h-full">
            <Image
              className="object-cover"
              alt="배경"
              src="/img/daldam music - 차.jpeg"
              fill
            />
          </div>
          <div className="absolute top-0 bg-gradient-to-t from-black w-full h-full"></div>
        </div>
      </section>
      {/* Search Section */}
      <section
        className={cn("sticky top-0 left-0 z-10", isScrolled && "bg-black")}
      >
        <div className="h-[64px] flex flex-row justify-between items-center p-2">
          <article className="hidden lg:flex flex-row items-center h-[42px] min-w-[480px] rounded-2xl px-[16px] gap-[16px] border border-neutral-500">
            <FiSearch size={24} />

            <input
              type="text"
              placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
              className="h-full bg-transparent w-full"
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
        <div className="relative">Contents Section{children}</div>
      </section>
    </header>
  );
};

export default Header;
