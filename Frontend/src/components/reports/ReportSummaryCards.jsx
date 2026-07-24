import {
  FaUsers,
  FaFolderOpen,
  FaTasks,
  FaCheckCircle,
} from "react-icons/fa";

function ReportSummaryCards({ cards }) {
  const cardData = [
    {
      title: "Total Users",
      value: cards?.totalUsers || 0,
      icon: <FaUsers />,
      bg: "#eef2ff",
      color: "#6366f1",
    },

    {
      title: "Total Projects",
      value: cards?.totalProjects || 0,
      icon: <FaFolderOpen />,
      bg: "#effcf6",
      color: "#10b981",
    },

    {
      title: "Total Tasks",
      value: cards?.totalTasks || 0,
      icon: <FaTasks />,
      bg: "#fff8e7",
      color: "#f59e0b",
    },

    {
      title: "Completed Tasks",
      value: cards?.completedTasks || 0,
      icon: <FaCheckCircle />,
      bg: "#fff1f2",
      color: "#ef4444",
    },
  ];

  return (
    <div className="row g-4 mb-4">

      {cardData.map((card, index) => (

        <div
          className="col-lg-3 col-md-6"
          key={index}
        >

          <div
            className="p-4 h-100"
            style={{
              background: card.bg,
              borderRadius: "18px",
            }}
          >

            <div className="d-flex justify-content-between align-items-center">

              <div>

                <p
                  className="mb-2"
                  style={{
                    color: card.color,
                    fontWeight: 600,
                  }}
                >
                  {card.title}
                </p>

                <h2 className="fw-bold mb-0">
                  {card.value}
                </h2>

              </div>

              <div
                className="d-flex align-items-center justify-content-center fs-4"
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: 15,
                  background: card.color,
                  color: "#fff",
                }}
              >
                {card.icon}
              </div>

            </div>

          </div>

        </div>

      ))}

    </div>
  );
}

export default ReportSummaryCards;