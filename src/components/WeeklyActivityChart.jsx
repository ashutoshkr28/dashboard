
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Tooltip,
//   Legend,
//   LineElement
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';


// ChartJS.register(
//   LineElement,
  
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Tooltip,
//   Legend
// );

// const WeeklyActivityChart = () => {
//   const data = {
//     labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
//     datasets: [
//       {
//         label: 'Deposit',
//         data: [450, 320, 280, 410, 390, 470, 220],
//         backgroundColor: '#396AFF',
//         borderColor: '#396AFF',
//         borderWidth: 1,
//         borderRadius: {
//           topLeft: 30,
//           topRight: 30,
//           bottomLeft: 30,
//           bottomRight: 30
//         }, // Rounded all corners
//         borderSkipped: false, // Applies border radius to all sides
//       },
//       {
//         label: 'Withdrawal',
//         data: [220, 180, 300, 250, 190, 280, 400],
//         backgroundColor: '#000000CC',
//         borderColor: '#000000',
//         borderWidth: 1,
//         borderRadius: {
//           topLeft: 30,
//           topRight: 30,
//           bottomLeft: 30,
//           bottomRight: 30
//         }, 
//         borderSkipped: false,
//       }
//     ]
//   };
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false
//       }
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 500,
//         ticks: {
//           stepSize: 100
//         }
//       },
//       x: {
//         grid: {
//           display: false
//         },
//         categoryPercentage: 0.7, 
//         barPercentage: 0.5,
//         grouped: true,
//       }
//     },
    
//     datasets: {
//       bar: {
//         categoryPercentage: 0.8,
//         barPercentage: 0.4,
//       }
//     }
//   };

//   return <Bar data={data} options={options}/>;
// };

// export default WeeklyActivityChart;



import { useRef, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const WeeklyActivityChart = () => {
  const chartRef = useRef(null);
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const updateChartOptions = () => {
      const isMobile = window.innerWidth < 768;
      setChartOptions({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: isMobile ? "bottom" : "top",
            labels: {
              font: {
                size: isMobile ? 12 : 14,
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 500,
            ticks: {
              stepSize: 100,
              font: {
                size: isMobile ? 10 : 14,
              },
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: isMobile ? 10 : 14,
              },
            },
            categoryPercentage: isMobile ? 0.8 : 0.7,
            barPercentage: isMobile ? 0.5 : 0.4,
          },
        },
      });
    };

    updateChartOptions();
    window.addEventListener("resize", updateChartOptions);

    return () => {
      window.removeEventListener("resize", updateChartOptions);
      if (chartRef.current) {
        chartRef.current.destroy(); // Destroy previous instance
      }
    };
  }, []);

  const data = {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [
      {
        label: "Deposit",
        data: [450, 320, 280, 410, 390, 470, 220],
        backgroundColor: "#396AFF",
        borderRadius: 15,
      },
      {
        label: "Withdrawal",
        data: [220, 180, 300, 250, 190, 280, 400],
        backgroundColor: "#000000",
        borderRadius: 15,
      },
    ],
  };

  return (
    <div className="w-full h-72 sm:h-80 md:h-96 lg:h-[450px] p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-center text-lg md:text-xl font-semibold mb-3">Weekly Activity</h2>
      <Bar ref={chartRef} data={data} options={chartOptions} />
    </div>
  );
};

export default WeeklyActivityChart;
