"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  RiBarChart2Line,
  RiStore3Line,
  RiStarLine,
  RiMessage3Line,
  RiCalendarCheckLine,
  RiSpeakLine,
  RiLogoutCircleRLine,
  RiArrowRightSLine,
  RiMenuFill,
  RiCloseFill,
} from "react-icons/ri";

const UserSideBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static md:w-[40%] ls:w-[30%] xl:w-auto w-[80%] h-full top-0 bg-secondary-900 p-4 flex flex-col justify-between z-50 ${
          showMenu ? "left-0" : "-left-full"
        } transition-all`}
      >
        <div>
          <h1 className="text-center text-2xl font-bold mb-10 font-rocksalt">
            Usuario<span className="text-primary text-4xl">.</span>
          </h1>
          <ul>
            <li>
              <Link
                href="/user-dashboard/"
                className="flex items-center rounded-md border-b-[1px] border-white/20 font-newrocker gap-4 px-4 py-5  hover:bg-secondary-100 transition-colors"
              >
                <RiStore3Line className="text-primary " /> Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/user-dashboard/profile"
                className="w-full flex items-center rounded-md border-b-[1px] border-white/20 font-newrocker justify-between gap-4 px-4 py-5  hover:bg-secondary-100 transition-colors"
              >
                <span className="flex items-center gap-4">
                  <RiSpeakLine className="text-primary" /> Perfil
                </span>
              </Link>
            </li>

            <li>
              <Link
                href="/user-dashboard/misFavoritos"
                className="flex items-center gap-4 px-4 py-5 rounded-md font-newrocker border-b-[1px] border-white/20 hover:bg-secondary-100 transition-colors"
              >
                <RiMessage3Line className="text-primary" /> Mis favoritos
              </Link>
            </li>
            <li>
              <Link
                href="/user-dashboard/reservas"
                className="flex items-center gap-4 px-4 py-5 rounded-md font-newrocker border-b-[1px] border-white/20 hover:bg-secondary-100 transition-colors"
              >
                <RiCalendarCheckLine className="text-primary" /> Reservas
              </Link>
            </li>
          </ul>
        </div>
        <nav>
          <Link
            href=""
            className="flex items-center gap-4 px-4 py-5 text-[20px] rounded-md font-newrocker hover:bg-secondary-100 transition-colors"
          >
            <RiLogoutCircleRLine className="text-primary" /> Cerrar sesión
          </Link>
        </nav>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className=" xl:hidden fixed bottom-4 right-4 bg-primary text-black p-4 rounded-full z-50"
      >
        {showMenu ? <RiCloseFill /> : <RiMenuFill />}
      </button>
    </>
  );
};

export default UserSideBar;
