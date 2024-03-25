'use client';
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";

export default function Logout(){
    const logoutBtn = () => {
        signOut();
        redirect('/');
      }
    return(
        <div>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={logoutBtn}> Logout </button>
        </div>
    )
}