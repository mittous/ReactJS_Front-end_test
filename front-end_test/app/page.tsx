'use client'
import Image from "next/image";
import AppContextProvider from "./context/AppContextProvider";
import NavBar from "@/components/NavBar";
import DashBoard from "@/components/DashBoard";
import SideBar from "@/components/SideBar";
import DropProfile from "@/components/DropProfile";
import DropLanguage from "@/components/dropLanguage";
import Sites from "@/components/Sites";


export default function Home() {
  return (
    
    <AppContextProvider>
      <div className = 'flex w-fit h-fit bg-[#F2F2F2] '>
        <SideBar />
        <DashBoard />
        <DropLanguage/>
        <DropProfile/>
      </div>
    </AppContextProvider>
      
  );
}
