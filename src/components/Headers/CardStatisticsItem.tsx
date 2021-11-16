import React from 'react';

type IStatistics = {
  title: string;
  Icon: React.ComponentType<any>;
  value: number;
};

export default function CardStatisticsItem({
  title,
  Icon,
  value,
}: IStatistics) {
  return (
    <>
      <div className="transform hover:scale-105 cursor-pointer transition delay-100 w-3/12  p-2 py-4 shadow-xl  border rounded-xl bg-gradient-to-r">
        <div className="flex justify-between">
          <div></div>
          <div className=" w-10  h-10 flex items-center justify-center  bg-gray-300 rounded-xl m-1  bg-opacity-30">
            {Icon}
          </div>
        </div>
        <p className="text-black text-md  ">{title}</p>
        <p className="text-black text-lg  font-semibold  ">{value}</p>
      </div>
    </>
  );
}
