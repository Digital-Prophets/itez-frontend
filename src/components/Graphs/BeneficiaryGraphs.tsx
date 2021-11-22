
import DoughnutChart from "./DoughnutChart";
import PieChart from "./PieChart";
import SpineArea from "./SpineArea";

export default function BeneficiaryGraphs() {


    return (

        <div className="max-w-full mx-auto bg-white shadow-md dark:bg-gray-800 mt-8" style={{width: "100%"}}>
            <div className="grid grid-cols-2 gap-0">
            <div>
            <SpineArea />
            </div>
            
            <div className="border-gray-500"> 
                <table className="min-w-full divide-y divide-gray-200">
                  
                  <tbody className="bg-white divide-y divide-gray-200 text-center">
           
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                        Beneficiaries
                          <div className="text-sm text-gray-500">1</div>
                        </td>
                        </tr>
                        <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                        Recorded
                          <div className="text-sm text-gray-500">
                            2
                          </div>
                        </td>
                        </tr>
                        <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                        Females
                          <div className="text-sm text-gray-500">
                            3
                          </div>
                        </td>
                        </tr>
                        <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                        Males
                          <div className="text-sm text-gray-500">
                            4
                          </div>
                        </td>
                      </tr>
                  </tbody>
                </table>
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
