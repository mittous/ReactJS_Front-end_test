import React from 'react'
import NavBar from './NavBar'
import Sites from './Sites'
import Top from './Top'
import Image from 'next/image'
import DataTable from './dataTable'

function DashBoard() {
 
  



  return (
      <div className= ' h-full w-full '>
        <NavBar />
        <DataTable />
    </div>
  )
}

export default DashBoard
