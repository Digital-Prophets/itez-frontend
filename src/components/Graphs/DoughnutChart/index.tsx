import { Doughnut } from "react-chartjs-2";

function PieChart() {

   const data = {
        labels: ['Female', 'Male','Others'],
        datasets: [{
           
            data: [500, 300, 60],
            backgroundColor: [
                '#C51350',
                '#DDE3E9',
                '#FFBC00'   
            ],
            borderColor: [
                '#C51350',
                '#DDE3E9',
                '#FFBC00'
            ],
            borderWidth: 1
        }]
    }

    const options =  {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Male,female and others rate',
                align: 'start',
              
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                labelString: 'probability',
                display: false
            }
        }
    }


 const plugins = [{
     beforeDraw: function(chart: any) {
      var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
          ctx.restore();
          var fontSize = (height / 160).toFixed(2);
          ctx.font = fontSize + "em sans-serif";
          ctx.textBaseline = "top";
          var text = "90%",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
          ctx.fillText(text, textX, textY);
          ctx.save();
     }, 
     
   }]



  return (
   
  <div className="renderChart shadow-lg bg-white m-2">
   
 <div className="m-2" style={{height:350, marginBottom: 60}}>
 <Doughnut 
        type="doughnut" 
        data={data} 
        options={options} 
        plugins={plugins} 
        className="m-2"
        
        />
    </div>
    <div className="flex items-center justify-center mr-4 mb-4 pb-4">
        <div className="flex flex-row items-center">
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full uppercase last:mr-0 mr-1" style={{color: "#C51350", backgroundColor: "#DDE3E9"}}>
            190
            </span>
            <label htmlFor="males" className="ml-2 text-sm font-normal text-gray-600">Males</label>
        </div>
        <div className="flex flex-row items-center ml-4">
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full uppercase last:mr-0 mr-1" style={{color: "#DDE3E9", backgroundColor: "#C51350"}}>
            300
        </span>
            <label htmlFor="females" className="ml-2 text-sm font-normal text-gray-600">Females</label>
        </div>
        <div className="flex flex-row items-center ml-4">
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full uppercase last:mr-0 mr-1" style={{color: "#DDE3E9", backgroundColor: "#FFBC00"}}>
            30
        </span>
            <label htmlFor="females" className="ml-2 text-sm font-normal text-gray-600">Others</label>
        </div>
    </div>
  </div>
  
  );
}

export default PieChart;