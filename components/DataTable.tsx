import React, { useContext } from "react";
import CheckBoxFilter from "./CheckBoxFilter";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

function DataTable() {

  return (
    <>
      <div className="  w-full flex flex-1 ml-[65px]   py-[200px] p-[40px]">
        <table className="  border justify-center h-full rounded-md bg-white   ">
        <TableHead />
        <TableBody />
        </table>
      </div>
      <CheckBoxFilter />
    </>
  );
}

export default DataTable;
