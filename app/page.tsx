'use client'
import AppContextProvider from "./context/AppContextProvider";
import DashBoard from "@/components/DashBoard";
import SideBar from "@/components/SideBar";
import DropProfile from "@/components/DropProfile";
import DropLanguage from "@/components/DropLanguage";
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
