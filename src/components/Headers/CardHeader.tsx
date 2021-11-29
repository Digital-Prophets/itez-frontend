import { IoMdWoman, IoMdPeople, IoMdMan, IoMdAlbums } from "react-icons/io";

import fetchData from "../../utils/fetcherHelper";

import CardStatisticsItem from "./CardStatisticsItem";


const CardHeader = () => {
  const { data, isLoading, isError } = fetchData('beneficiaries');
  console.log(data, isLoading, isError);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
        <div className="justify-center">
          <CardStatisticsItem
            title="Total Beneficiaries"
            color="#C51350"
            Icon={IoMdPeople}
            value={100}
          />
        </div>
        <div className="justify-center">
          <CardStatisticsItem
            title="Total Males"
            color="#92B703"
            Icon={IoMdMan}
            value={20}
          />
        </div>
        <div className="justify-center">
          <CardStatisticsItem
            title="Total Females"
            color="#5ABCBB"
            Icon={IoMdWoman}
            value={10}
          />
        </div>
        <div className="justify-center">
          <CardStatisticsItem
            title="Weekly Records"
            color="#FFBC00"
            Icon={IoMdAlbums}
            value={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
