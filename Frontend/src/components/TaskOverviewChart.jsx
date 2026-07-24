// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// import { Line, Doughnut } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   ArcElement,
//   Tooltip,
//   Legend
// );





import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import {
  Line,
  Doughnut,
} from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler
);



// export const TaskOverviewChart = () => {
//   const data = {
//     labels: [
//       "Mon",
//       "Tue",
//       "Wed",
//       "Thu",
//       "Fri",
//       "Sat",
//       "Sun",
//     ],

//     datasets: [
//       {
//         label: "Tasks",
//         data: [12, 19, 8, 15, 22, 17, 25],
//         borderColor: "#7c3aed",
//         backgroundColor: "rgba(124,58,237,0.2)",
//         tension: 0.4,
//         fill: true,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//   };

//   return <Line data={data} options={options} />;
// };

export const TaskOverviewChart = ({
  taskStatus,
  projectStatus,
}) => {

  const labels =
    projectStatus?.map(
      (item) => item.status
    ) || [];

  const values =
    projectStatus?.map(
      (item) => item.count
    ) || [];

  const data = {

    labels,

    datasets: [

      {

        label: "Projects",

        data: values,

        borderColor: "#6366F1",

        backgroundColor:
          "rgba(99,102,241,.15)",

        fill: true,

        tension: .4,

        pointRadius: 5,

        pointHoverRadius: 7,

      },

    ],

  };

  const options = {

    responsive: true,

    maintainAspectRatio: false,

    plugins: {

      legend: {

        display: false,

      },

    },

    scales: {

      y: {

        beginAtZero: true,

        ticks: {

          stepSize: 1,

        },

      },

    },

  };

  return (

    <div
      className="card border-0 shadow-sm rounded-4 p-4"
      style={{
        height: "360px",
      }}
    >

      <h5 className="fw-bold mb-4">

        Projects Overview

      </h5>

      <div
        style={{
          height: "280px",
        }}
      >

        <Line
          data={data}
          options={options}
        />

      </div>

    </div>

  );

};


// export const TaskStatusChart = () => {


//   const data = {
//     labels: [
//       "Completed",
//       "In Progress",
//       "Overdue",
//     ],

//     datasets: [
//       {
//         data: [12, 8, 4],
//         backgroundColor: [
//           "#22c55e",
//           "#3b82f6",
//           "#ef4444",
//         ],
//         borderWidth: 0,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     cutout: "70%",
//     plugins: {
//       legend: {
//         position: "bottom",
//       },
//     },
//   };

//   return (
//     <Doughnut
//       data={data}
//       options={options}
//     />
//   );
// };



export const TaskStatusChart = ({
  taskStatus,
}) => {

  const labels =
    taskStatus?.map(
      (item) => item.status
    ) || [];

  const values =
    taskStatus?.map(
      (item) => item.count
    ) || [];

  const data = {

    labels,

    datasets: [

      {

        data: values,

        backgroundColor: [

          "#22C55E",
          "#F59E0B",
          "#3B82F6",

        ],

        borderWidth: 0,

        hoverOffset: 10,

      },

    ],

  };

  const options = {

    responsive: true,

    maintainAspectRatio: false,

    cutout: "72%",

    plugins: {

      legend: {

        position: "bottom",

        labels: {

          usePointStyle: true,

          pointStyle: "circle",

          padding: 20,

          font: {

            size: 13,

          },

        },

      },

      tooltip: {

        callbacks: {

          label: function (context) {

            return `${context.label}: ${context.raw}`;

          },

        },

      },

    },

  };

  const total =
    values.reduce(
      (sum, value) => sum + value,
      0
    );

  return (

    <div
      className="card border-0 shadow-sm rounded-4 p-4"
      style={{
        height: "360px",
      }}
    >

      <h5 className="fw-bold mb-4">

        Task Status

      </h5>

      <div
        style={{
          height: "240px",
          position: "relative",
        }}
      >

        <Doughnut
          data={data}
          options={options}
        />

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform:
              "translate(-50%, -50%)",
            textAlign: "center",
            pointerEvents: "none",
          }}
        >

          <h3 className="fw-bold mb-0">
            {total}
          </h3>

          <small className="text-muted">
            Tasks
          </small>

        </div>

      </div>

    </div>

  );

};