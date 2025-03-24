import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Added for improved labels

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const ExpenseStatistics = () => {
  const data = {
    labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
    datasets: [
      {
        data: [30, 15, 20, 35],
        backgroundColor: ["#2C3153", "#FC7900", "#2D68FF", "#191919"],
        hoverBackgroundColor: ["#1E223D", "#E06C00", "#1A4FCC", "#111111"],
        borderWidth: 10, // Reduced border thickness for a cleaner look
        borderColor: "#ffffff",
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "0%", // Ensures it's a full pie chart (not a donut)
    rotation: -90, // Starts from top position to match the provided image
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        color: "#ffffff",
        font: {
          weight: "bold",
          size: 14,
        },
        formatter: (value, context) => {
          let label = context.chart.data.labels[context.dataIndex];
          return `${value}%\n${label}`; // Display percentage and label inside
        },
        anchor: 'center',
        align: 'center',
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4">
      {/* <h2 className="text-xl font-semibold mb-4">Expense Statistics</h2> */}
      <div className="w-[300px] h-[300px] mx-auto overflow-auto">
        <Pie className="w-full h-full" data={data} options={options} />
      </div>
    </div>
  );
};

export default ExpenseStatistics;





















// const ExpenseStatistics = () => {
//   const data = {
//     labels: ['Entertainment', 'Investment', 'Bill Expense', 'Others'],
//     datasets: [
//       {
//         data: [30, 20, 15, 35],
//         backgroundColor: [
//           '#2E3A62', // Entertainment (Dark Blue)
//           '#3B82F6', // Investment (Blue)
//           '#FF7F00', // Bill Expense (Orange)
//           '#1C1C1C'  // Others (Black)
//         ],
//         borderWidth: 2,
//         borderColor: '#fff',
//         hoverOffset: 4,
//       }
//     ],
//   };

//   const options = {
//     plugins: {
//       legend: {
//         display: false
//       }
//     },
//     cutout: '60%', // Makes it resemble the uploaded chart
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-lg p-4">
//       <h2 className="text-xl font-semibold mb-4">Expense Statistics</h2>
//       <Doughnut data={data} options={options} />
//     </div>
//   );
// };

// export default ExpenseStatistics;
