import { Line } from "react-chartjs-2";

const BalanceHistory = () => {
  const data = {
    labels: ["July", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: "Balance History",
        data: [400, 600, 300, 700, 500, 800, 600],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Balance History</h3>
      <Line data={data} options={options} />
    </div>
  );
};


export default BalanceHistory;



// import { Line } from "react-chartjs-2";

// const BalanceHistory = () => {
//   const data = {
//     labels: ["July", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
//     datasets: [
//       {
//         label: "Balance History",
//         data: [400, 600, 300, 700, 500, 800, 600],
//         borderColor: "#3b82f6",
//         backgroundColor: "rgba(59, 130, 246, 0.2)",
//         fill: true,
//         tension: 0.4,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//     elements: {
//       line: {
//         borderWidth: 2,
//         shadowColor: 'rgba(59, 130, 246, 0.5)',
//         shadowBlur: 10,
//         shadowOffsetX: 0,
//         shadowOffsetY: 4,
//       },
//     },
//   };

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md">
//       <h3 className="text-xl font-semibold mb-4">Balance History</h3>
//       <Line data={data} options={options} />
//     </div>
//   );
// };

// export default BalanceHistory;