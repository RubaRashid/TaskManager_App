import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import {
  Doughnut,
  Bar,
} from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function ReportCharts({
  taskStatus,
  projectStatus,
}) {
  // ======================
  // Task Status Chart
  // ======================

  const taskLabels =
    taskStatus.map(
      (item) => item._id
    );

  const taskCounts =
    taskStatus.map(
      (item) => item.count
    );

  const taskChartData = {
    labels: taskLabels,

    datasets: [
      {
        data: taskCounts,

        backgroundColor: [
          "#6366f1",
          "#10b981",
          "#f59e0b",
          "#ef4444",
        ],

        borderWidth: 0,
      },
    ],
  };

  // ======================
  // Project Status Chart
  // ======================

  const projectLabels =
    projectStatus.map(
      (item) => item._id
    );

  const projectCounts =
    projectStatus.map(
      (item) => item.count
    );

  const projectChartData = {
    labels: projectLabels,

    datasets: [
      {
        label: "Projects",

        data: projectCounts,

        backgroundColor: [
          "#6366f1",
          "#10b981",
          "#f59e0b",
        ],

        borderRadius: 8,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,

    maintainAspectRatio: false,

    cutout: "72%",

    plugins: {

      legend: {

        position: "bottom",

      },

    },
  };

  const barOptions = {
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

      },

    },
  };

  return (

    <div className="row g-4 mb-4">

      {/* Project Status */}

      <div className="col-lg-7">

        <div
          className="bg-white p-4 h-100"
          style={{
            borderRadius: "18px",
            boxShadow:
              "0 4px 20px rgba(0,0,0,.05)",
          }}
        >

          <div className="d-flex justify-content-between align-items-center mb-3">

            <h5 className="fw-bold mb-0">
              Project Status
            </h5>

          </div>

          <div
            style={{
              height: 340,
            }}
          >

            <Bar
              data={projectChartData}
              options={barOptions}
            />

          </div>

        </div>

      </div>

      {/* Task Status */}

      <div className="col-lg-5">

        <div
          className="bg-white p-4 h-100"
          style={{
            borderRadius: "18px",
            boxShadow:
              "0 4px 20px rgba(0,0,0,.05)",
          }}
        >

          <h5 className="fw-bold mb-3">
            Task Status
          </h5>

          <div
            style={{
              height: 340,
            }}
          >

            <Doughnut
              data={taskChartData}
              options={doughnutOptions}
            />

          </div>

        </div>

      </div>

    </div>

  );
}

export default ReportCharts;