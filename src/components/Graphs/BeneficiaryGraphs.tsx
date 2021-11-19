import { Chart } from "react-google-charts";
export default function BeneficiaryGraphs() {

    return (

        <div className="max-w-full mx-auto bg-white shadow-md dark:bg-gray-800 mt-8">
            <div className="grid grid-cols-2 gap-0">
            <div>
                <Chart
                width={'1000%'}
                height={'600px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['x', 'Today', 'Yesterday'],
                    [0, 0, 0],
                    [1, 10, 5],
                    [2, 23, 15],
                    [3, 17, 9],
                    [4, 18, 10],
                    [5, 9, 5],
                    [6, 11, 3],
                    [7, 27, 19],
                ]}
        
                options={{
                    title: 'Year to date trends \n As of 03 November 2021, 09:41 PM',
                    titleTextStyle: { color: '#264158', fontSize: 12 },

                    legend: { position: 'top', alignment: 'end' },
                  
                    annotations: {
                        alwaysOutside: true,
                        textStyle: {
                            color: '#000000',
                            fontSize: 15
                        }
                    },
                    hAxis: {
                        slantedText: true,
                        slantedTextAngle: -45
                    },
                    series: {
                        0: { curveType: 'function' },
                        1: { targetAxisIndex: 1, },
                        2: { targetAxisIndex: 2, type: 'line' }
                    },
                    vAxes: {
                        0: { textPosition: 'none' },
                        1: {}
                    }             
                }}
                rootProps={{ 'data-testid': '2' }}
                />
            </div>
            
            <div className="border-gray-500 border-l-2"> 
                <table className="min-w-full divide-y divide-gray-200">
                  
                  <tbody className="bg-white divide-y divide-gray-200 text-center border-gray-500 border-l-2">
           
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
            <div>c</div>
            
            <div>D</div>
            </div>
        </div>
    )
}
