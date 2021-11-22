type IStatistics = {
  title: string;
  color: string;
  Icon: any;
  value: number;
};

export default function CardStatisticsItem({
  title,
  color,
  Icon,
  value,
}: IStatistics) {
  return (
    <>
      <div className="bg-white shadow-xl transform hover:scale-105 cursor-pointer transition delay-100 pb-8 pt-2 mt--4">
        <div className="flex m-2">
          <div className="flex-grow">
            <p className="text-lg text-gray-700 font-bold mb-2">{title}</p>
          </div>
          <div className="flex-none">
            <Icon className="w-10 h-10" style={{ color }} />
          </div>
        </div>

        <div className="text-center">
          <p className="text-base text-gray-800 font-bold">{value}</p>
        </div>
      </div>
    </>
  );
}
