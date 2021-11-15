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
      <div className="bg-white rounded shadow border p-6 w-64">
        <h6 className="text-3xl font-bold mb-4 mt-0">{title}</h6>
        <p className="text-gray-700 text-sm">{value}</p>
        <Icon className="h-10" />
      </div>
      {/* <div className="grid-flow-col flex flex-col gap-4  overflow-hidden rounded-lg shadow-2xl ">
        <div className="py-3 px-8 ">
          <div className="">
            <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">
              {title}
            </h4>
          </div>
          <div className="">
            <p className="leading-normal text-gray-700">{value}</p>
          </div>
          <div className="">
            <Icon className="h-8 mb-1 group-hover:animate-bounce" />
          </div>
        </div>
      </div> */}
    </>
  );
}
