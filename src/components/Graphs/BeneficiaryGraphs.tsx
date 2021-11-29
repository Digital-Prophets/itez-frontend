
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import PieChart from "./PieChart";
import SpineArea from "./SpineArea";

export default function BeneficiaryGraphs() {


    return (

        <div className="max-w-full mx-auto dark:bg-gray-800 mt-8" style={{width: "100%"}}>
            <div className="grid grid-cols-2 gap-0">
            <div>
            <SpineArea />
            </div>
            
            <div className="border-gray-500"> 
                <BarChart />
             </div>
            <div className="mt-8">
            <PieChart />
            </div>
            
            <div className="mt-8">

            <DoughnutChart />
            </div>
            </div>
        </div>
    )
}
