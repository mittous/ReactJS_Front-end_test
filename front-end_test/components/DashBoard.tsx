import React from 'react'
import NavBar from './NavBar'
import Sites from './Sites'
import Top from './Top'
import Image from 'next/image'
import DataTable from './dataTable'

function DashBoard() {
 
  



  return (
    <div className= '   flex w-full h-full bg-[#F2F2F2] '>
      <div className= ' flex flex-col h-full w-full '>
        <NavBar />
        <DataTable />
      </div>
      
      
    </div>
  )
}

export default DashBoard
