"use client";

import { signOut } from "next-auth/react";
import { MdOutlineLogout } from "react-icons/md"

const BtnLogout= () => {

    return(
        <button className="my-4 flex mb-2 justify-start items-center gap-1 pl-2 border border-gray-200 hover:bg-emerald-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
        onClick={()=>signOut()}
        >
        <MdOutlineLogout className="text-2xl text-emerald-400 group-hover:text-white" />
        <h3 className="text-base text-emerald-400 group-hover:text-white font-semibold">
         Sair
        </h3>
      </button>
    )
}
export default BtnLogout;