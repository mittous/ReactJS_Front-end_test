'use client'
import Image from "next/image";
import AppContextProvider from "./context/AppContextProvider";
import NavBar from "@/components/NavBar";
import DashBoard from "@/components/DashBoard";


export default function Home() {
  return (
    
    <AppContextProvider>
      <div className = 'flex'>
        <NavBar />
        <DashBoard />
      </div>
    </AppContextProvider>
      
  );
}
