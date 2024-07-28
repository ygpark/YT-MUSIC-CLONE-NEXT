"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { React, useMemo } from "react";
import { FiMusic, FiCompass, FiPlus } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { dummyPlaylistArray } from "@/lib/dummyData";
import PlayListNav from "@/components/elements/PlayListNav";

const Navigator = () => {
  const pathname = usePathname();
  const routes = useMemo(() => {
    return [
      {
        icon: <GoHome size={20} />,
        label: "홈",
        isActive: pathname === "/",
        href: "/",
      },
      {
        icon: <FiCompass size={20} />,
        label: "둘러보기",
        isActive: pathname === "/explore",
        href: "/explore",
      },
      {
        icon: <FiMusic size={20} />,
        label: "보관함",
        isActive: pathname === "/library",
        href: "/library",
      },
    ];
  }, [pathname]);

  //console.log(routes);

  return (
    <div>
      <section className="flex flex-col gap-2 p-4">
        {routes.map((route, index) => {
          return (
            <Link href={route.href} key={route.label}>
              <div
                className={cn(
                  "flex flex-row items-center gap-4 text-[16px] hover:bg-neutral-700 rounded-lg p-2 transition",
                  route.isActive && "bg-neutral-800"
                )}
              >
                {route.icon}
                <span>{route.label}</span>
              </div>
            </Link>
          );
        })}
      </section>
      <section className="px-6">
        <div className="w-full h-[1px] bg-neutral-600"></div>
      </section>
      <section className="px-6">
        <div className="flex flex-row justify-center items-center bg-neutral-700 hover:bg-neutral-600 cursor-pointer my-6 rounded-3xl p-2 font-[200] gap-2">
          <FiPlus></FiPlus> <span>새 재생목록</span>
        </div>
      </section>
      <section>
        <ul className="px-1">
          {dummyPlaylistArray.map((playlist) => {
            return (
              <PlayListNav key={playlist.id} playlist={playlist}></PlayListNav>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Navigator;
