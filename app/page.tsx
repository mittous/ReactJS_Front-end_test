'use client'
import Image from "next/image";
import AppContextProvider from "./context/AppContextProvider";
import NavBar from "@/components/NavBar";
import DashBoard from "@/components/DashBoard";
import SideBar from "@/components/SideBar";
import DropProfile from "@/components/DropProfile";
import DropLanguage from "@/components/DropLanguage";
import Sites from "@/components/Sites";
import "./globals.css";


export default function Home() {
  return (
    
    <AppContextProvider>
      <div className = 'flex w-full h-full'>
        <SideBar />
        <DashBoard />
        <DropLanguage/>
        <DropProfile/>
      </div>
    </AppContextProvider>
      
  );
}
