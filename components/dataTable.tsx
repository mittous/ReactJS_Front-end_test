import React, { useContext } from "react";
import Image from "next/image";
import { AppContext } from "@/app/context/AppContextProvider";
import CheckBoxFilter from "./CheckBoxFilter";

function DataTable() {
  const data: any = useContext(AppContext);

  const i = [0, 5, 8];
  const dataColum = [
    {
      icon: (
        <Image
          src="/assets/product/41.svg"
          alt="Hard Hat"
          width={90}
          height={90}
          priority={true}
          className=" "
        />
      ),
      label: "Hard Hat",
    },
    {
      icon: (
        <Image
          src="/assets/product/baseball-glove.svg"
          alt="Protective gloves"
          width={90}
          height={90}
          priority={true}
          className=" "
        />
      ),
      label: "Protective gloves",
    },
    {
      icon: (
        <Image
          src="/assets/product/Group 689.svg"
          alt="Face shield"
          width={97}
          height={105}
          priority={true}
          className=" "
        />
      ),
      label: "Face shield",
    },
    {
      icon: (
        <Image
          src="/assets/product/image 19.svg"
          alt="Knee pads"
          width={88}
          height={89}
          priority={true}
          className=" "
        />
      ),
      label: "Knee pads",
    },
    {
      icon: (
        <Image
          src="/assets/product/image 20.svg"
          alt="Hi-Vis Jacket"
          width={80}
          height={79}
          priority={true}
          className=" "
        />
      ),
      label: "Hi-Vis Jacket",
    },
    {
      icon: (
        <Image
          src="/assets/product/Rectangle 268-1.svg"
          alt="Ear protection"
          width={90}
          height={98}
          priority={true}
          className=" "
        />
      ),
      label: "Ear protection",
    },
    {
      icon: (
        <Image
          src="/assets/product/Rectangle 268-2.svg"
          alt="Mask"
          width={100}
          height={109}
          priority={true}
          className=" "
        />
      ),
      label: "Mask protection",
    },
    {
      icon: (
        <Image
          src="/assets/product/Rectangle 268-3.svg"
          alt="Rectangle 268-3"
          width={100}
          height={110}
          priority={true}
          className=" "
        />
      ),
      label: "Safety shoes",
    },
    {
      icon: (
        <Image
          src="/assets/product/Rectangle 268-4.svg"
          alt="Rectangle 268-4"
          width={100}
          height={110}
          priority={true}
          className=" "
        />
      ),
      label: "Coverall",
    },
    {
      icon: (
        <Image
          src="/assets/product/Rectangle 268-5.svg"
          alt="Safety Harness"
          width={100}
          height={110}
          priority={true}
          className=" "
        />
      ),
      label: "Safety Harness",
    },
    {
      icon: (
        <Image
          src="/assets/product/Rectangle 268-6.svg"
          alt="Welding helmet"
          width={100}
          height={110}
          priority={true}
          className=" "
        />
      ),
      label: "Welding helmet",
    },
    {
      icon: (
        <Image
          src="/assets/product/Rectangle 268.svg"
          alt="Safety glasses"
          width={90}
          height={99}
          priority={true}
          className=" "
        />
      ),
      label: "Safety glasses",
    },
  ];

  const contractorImage = (
    <Image
      src="/assets/WorkerPhoto.svg"
      alt="Hi-Vis Jacket"
      width={36}
      height={36}
      priority={true}
      className=" "
    />
  );
  const biowanzeImg = (
    <Image
      src="/assets/biowanzeImg.svg"
      alt="Hi-Vis Jacket"
      width={36}
      height={36}
      priority={true}
      className=" "
    />
  );
  const dataRow = [
    {
      WorkerIcon: contractorImage,
      biowanzeImg: biowanzeImg,
      dataRow: [
        "Row  1",
        "Row  2",
        "Row  3",
        "Row  4",
        "Row  5",
        "Row  6",
        "Row  7",
        "Row  8",
        "Row  9",
        "Row  10",
        "Row  11",
        "Row  12",
      ],
    },
    {
      WorkerIcon: contractorImage,
      biowanzeImg: biowanzeImg,
      dataRow: [
        "Row  1",
        "Row  2",
        "Row  3",
        "Row  4",
        "Row  5",
        "Row  6",
        "Row  7",
        "Row  8",
        "Row  9",
        "Row  10",
        "Row  11",
        "Row  12",
      ],
    },
    {
      WorkerIcon: contractorImage,
      biowanzeImg: biowanzeImg,
      dataRow: [
        "Row  1",
        "Row  2",
        "Row  3",
        "Row  4",
        "Row  5",
        "Row  6",
        "Row  7",
        "Row  8",
        "Row  9",
        "Row  10",
        "Row  11",
        "Row  12",
      ],
    },
    {
      WorkerIcon: contractorImage,
      biowanzeImg: biowanzeImg,
      dataRow: [
        "Row  1",
        "Row  2",
        "Row  3",
        "Row  4",
        "Row  5",
        "Row  6",
        "Row  7",
        "Row  8",
        "Row  9",
        "Row  10",
        "Row  11",
        "Row  12",
      ],
    },
    {
      WorkerIcon: contractorImage,
      biowanzeImg: biowanzeImg,
      dataRow: [
        "Row  1",
        "Row  2",
        "Row  3",
        "Row  4",
        "Row  5",
        "Row  6",
        "Row  7",
        "Row  8",
        "Row  9",
        "Row  10",
        "Row  11",
        "Row  12",
      ],
    },
    {
      WorkerIcon: contractorImage,
      biowanzeImg: biowanzeImg,
      dataRow: [
        "Row  1",
        "Row  2",
        "Row  3",
        "Row  4",
        "Row  5",
        "Row  6",
        "Row  7",
        "Row  8",
        "Row  9",
        "Row  10",
        "Row  11",
        "Row  12",
      ],
    },
    {
      WorkerIcon: contractorImage,
      biowanzeImg: biowanzeImg,
      dataRow: [
        "Row  1",
        "Row  2",
        "Row  3",
        "Row  4",
        "Row  5",
        "Row  6",
        "Row  7",
        "Row  8",
        "Row  9",
        "Row  10",
        "Row  11",
        "Row  12",
      ],
    },
    {
      WorkerIcon: contractorImage,
      biowanzeImg: biowanzeImg,
      dataRow: [
        "Row  1",
        "Row  2",
        "Row  3",
        "Row  4",
        "Row  5",
        "Row  6",
        "Row  7",
        "Row  8",
        "Row  9",
        "Row  10",
        "Row  11",
        "Row  12",
      ],
    },
    {
      WorkerIcon: contractorImage,
      biowanzeImg: biowanzeImg,
      dataRow: [
        "Row  1",
        "Row  2",
        "Row  3",
        "Row  4",
        "Row  5",
        "Row  6",
        "Row  7",
        "Row  8",
        "Row  9",
        "Row  10",
        "Row  11",
        "Row  12",
      ],
    },
    {
      WorkerIcon: contractorImage,
      biowanzeImg: biowanzeImg,
      dataRow: [
        "Row  1",
        "Row  2",
        "Row  3",
        "Row  4",
        "Row  5",
        "Row  6",
        "Row  7",
        "Row  8",
        "Row  9",
        "Row  10",
        "Row  11",
        "Row  12",
      ],
    },
    {
      WorkerIcon: contractorImage,
      biowanzeImg: biowanzeImg,
      dataRow: [
        "Row  1",
        "Row  2",
        "Row  3",
        "Row  4",
        "Row  5",
        "Row  6",
        "Row  7",
        "Row  8",
        "Row  9",
        "Row  10",
        "Row  11",
        "Row  12",
      ],
    },
    {
      WorkerIcon: contractorImage,
      biowanzeImg: biowanzeImg,
      dataRow: [
        "Row  1",
        "Row  2",
        "Row  3",
        "Row  4",
        "Row  5",
        "Row  6",
        "Row  7",
        "Row  8",
        "Row  9",
        "Row  10",
        "Row  11",
        "Row  12",
      ],
    },
  ];

  return (
    <>
      <div className="h-full flex flex-1 p-2 mx-[65px] w-full py-[200px]">
        <table className="   border rounded-md bg-white  h-full w-full">
          <thead className=" outline outline-1 outline-gray-300 sticky top-[170px] ">
            <tr className=" bg-white  h-full  py-14">
              <th className="px-[3px]">
                <Image
                  src="/assets/seetingsIcon.svg"
                  alt="filter"
                  width={13}
                  height={13}
                  priority={true}
                  draggable={false}
                  className="cursor-pointer flex justify-center items-center   text-[12px] "
                  onClick={(e) => {
                    data.setFilterOn(!data.filterOn);
                  }}
                />
              </th>
              <th className="  text-[12px] text-[#737373] ">
                <div className="flex justify-center items-center shadow-[0_0_0_1px_rgba(242,242,242)] w-full h-full  ">
                  Workers
                </div>
              </th>

              {dataColum.map(
                (column, index) =>
                  !i.includes(index) && (
                    <th
                      key={index}
                      className="flex-col bg-white items-center justify-between p-4 pb-0"
                    >
                      <div className="flex justify-center  items-center min-w-[80px] h-[86px]  bg-[#F5F5F5] rounded-[5px]">
                        <div className="flex absolute justify-center items-center">
                          {column.icon}
                        </div>
                      </div>

                      <span className="flex justify-center  text-center pt-3 h-[60px]  text-neutral-500 text-[11px] font-normal">
                        {column.label}
                      </span>
                    </th>
                  )
              )}
            </tr>
          </thead>
          <tbody className="overflow-y-scroll h-full w-full">
            {dataRow.map((Row, trIndex) => (
              <tr key={trIndex}>
                <th className="border border-gray-300 px-[3px] text-[12px] text-[#737373]">
                  {trIndex + 1}
                </th>
                {/* 1111 111 111 1111fdfdfdf */}
                <th className="flex  justify-between min-w-[200px] border border-gray-300 px-[10px] py-[4px]">
                  
                  <div className="flex  ">
                    {Row.WorkerIcon}
                  <div className="flex-row  px-[8px] text-nowrap py-[2px]">
                    <div className="flex text-[12px] text-[#484848] leading-[15px]">  Blaise DEFLOO</div>
                    <div className="flex text-[11px] text-[#909090]">Manager  </div>
                  </div>
                  </div>

                    {Row.biowanzeImg}

                </th>

                {Row.dataRow.map(
                  (row, index) =>
                    !i.includes(index) && (
                      <td
                        key={index}
                        className="border-y border-gray-300 px-4 py-2"
                      >
                        {row}
                      </td>
                    )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CheckBoxFilter />
    </>
  );
}

export default DataTable;
