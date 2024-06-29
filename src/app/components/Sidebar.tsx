import React from "react";
import Link from "next/link"; 
import { Disclosure, DisclosureButton } from '@headlessui/react';
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineSettings,
  MdPerson
} from "react-icons/md";
import { FaCreditCard } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import BtnLogout from "./BtnLogout";
import { TbPigMoney } from "react-icons/tb";
function SideNavbar() {
  return (
    <div>
      <Disclosure as="nav">
        <DisclosureButton className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-emerald-600 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </DisclosureButton>
        <div className="p-6 w-1/2 h-screen bg-neutral-900 z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            <h1 className="text-base text-center cursor-pointer font-bold  text-white border-b border-gray-100 pb-4 w-full">
              Controle financeiro
            </h1>
            <div className="my-4 border-b border-gray-100 pb-4">
              <Link href="/dashboard">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-emerald-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <MdOutlineSpaceDashboard className="text-2xl text-emerald-400 group-hover:text-white " />
                  <h3 className="text-base text-emerald-400 group-hover:text-white font-semibold ">
                    Visão Geral
                  </h3>
                </div>
              </Link>
              <Link href="/dashboard/movimentacao">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-emerald-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  < MdOutlineAnalytics className="text-2xl text-emerald-400 group-hover:text-white " />
                  <h3 className="text-base text-emerald-400 group-hover:text-white font-semibold ">
                    Transações
                  </h3>
                </div>
              </Link>
              <Link href="/dashboard/cartoes-credito">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-emerald-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <FaCreditCard className="text-2xl text-emerald-400 group-hover:text-white " />
                  <h3 className="text-base text-emerald-400 group-hover:text-white font-semibold ">
                    Cartões de crédito
                  </h3>
                </div>
              </Link>
              <Link href="/dashboard/metas">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-emerald-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <TbPigMoney className="text-2xl text-emerald-400 group-hover:text-white " />
                  <h3 className="text-base text-emerald-400 group-hover:text-white font-semibold ">
                    Metas
                  </h3>
                </div>
              </Link>
              <Link href="/dashboard/perfil">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-emerald-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <MdPerson className="text-2xl text-emerald-400 group-hover:text-white " />
                  <h3 className="text-base text-emerald-400 group-hover:text-white font-semibold ">
                    Perfil
                  </h3>
                </div>
              </Link>
            </div>
            <div className="my-4 border-b border-gray-100 pb-4">
              <Link href="/dashboard/configuracoes">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-emerald-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <MdOutlineSettings className="text-2xl text-emerald-400 group-hover:text-white " />
                  <h3 className="text-base text-emerald-400 group-hover:text-white font-semibold ">
                    Configurações
                  </h3>
                </div>
              </Link>
            </div>
            {/* logout */}
            <BtnLogout />
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
