// import React from "react";
// import {
//   FaTasks,
//   FaClock,
//   FaCheckCircle,
//   FaExclamationCircle,
// } from "react-icons/fa";



// const styles = {
//   statsGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(4, 1fr)",
//     gap: "20px",
//   },

//   statCard: {
//     background: "#fff",
//     borderRadius: "18px",
//     padding: "22px",
//     display: "flex",
//     alignItems: "center",
//     gap: "15px",
//     boxShadow: "0 4px 15px rgba(0,0,0,.05)",
//   },

//   iconBox: {
//     width: "55px",
//     height: "55px",
//     borderRadius: "14px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     color: "#fff",
//     fontSize: "22px",
//   },
// };



// const StatsCards = () => {
//   const cards = [
//     {
//       title: "Total Tasks",
//       count: 24,
//       icon: <FaTasks />,
//       color: "#7c3aed",
//     },

//     {
//       title: "In Progress",
//       count: 8,
//       icon: <FaClock />,
//       color: "#3b82f6",
//     },

//     {
//       title: "Completed",
//       count: 12,
//       icon: <FaCheckCircle />,
//       color: "#f59e0b",
//     },

//     {
//       title: "Overdue",
//       count: 4,
//       icon: <FaExclamationCircle />,
//       color: "#ef4444",
//     },
//   ];

//   return (
//     // <div className="stats-grid">
//     //   {cards.map((card, index) => (
//     //     <div
//     //       className="stat-card"
//     //       key={index}
//     //     >
//     //       <div
//     //         className="icon-box"
//     //         style={{
//     //           background: card.color,
//     //         }}
//     //       >
//     //         {card.icon}
//     //       </div>

//     //       <div>
//     //         <h6>{card.title}</h6>
//     //         <h2>{card.count}</h2>
//     //       </div>
//     //     </div>
//     //   ))}
//     // </div>

//     <div style={styles.statsGrid}>
//   {cards.map((card, index) => (
//     <div
//       key={index}
//       style={styles.statCard}
//     >
//       <div
//         style={{
//           ...styles.iconBox,
//           background: card.color,
//         }}
//       >
//         {card.icon}
//       </div>

//       <div>
//         <h6>{card.title}</h6>
//         <h2>{card.count}</h2>
//       </div>
//     </div>
//   ))}
// </div>
//   );
// };

// export default StatsCards;





import React from "react";
import {
  FaUsers,
  FaProjectDiagram,
  FaTasks,
  FaCheckCircle,
  FaClock,
  FaSpinner,
} from "react-icons/fa";

const cardStyle = {
  border: "none",
  borderRadius: "18px",
  boxShadow: "0 4px 20px rgba(0,0,0,.05)",
  transition: "0.3s",
};

const iconBox = (bg) => ({
  width: "55px",
  height: "55px",
  borderRadius: "15px",
  background: bg,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontSize: "22px",
});

function StatsCards({ cards }) {
  const stats = [
    {
      title: "Total Users",
      value: cards?.totalUsers || 0,
      icon: <FaUsers />,
      color: "#0d6efd",
    },

    {
      title: "Projects",
      value: cards?.totalProjects || 0,
      icon: <FaProjectDiagram />,
      color: "#20c997",
    },

    {
      title: "Total Tasks",
      value: cards?.totalTasks || 0,
      icon: <FaTasks />,
      color: "#fd7e14",
    },

    {
      title: "Completed",
      value: cards?.completedTasks || 0,
      icon: <FaCheckCircle />,
      color: "#198754",
    },

    {
      title: "Pending",
      value: cards?.pendingTasks || 0,
      icon: <FaClock />,
      color: "#dc3545",
    },

    {
      title: "In Progress",
      value: cards?.inProgressTasks || 0,
      icon: <FaSpinner />,
      color: "#ffc107",
    },
  ];

  return (
    <div className="row g-4">
      {stats.map((item, index) => (
        <div
          className="col-xl-4 col-lg-6"
          key={index}
        >
          <div
            className="card h-100"
            style={cardStyle}
          >
            <div className="card-body d-flex justify-content-between align-items-center">

              <div>

                <p
                  className="text-muted mb-2"
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {item.title}
                </p>

                <h2
                  className="fw-bold mb-0"
                  style={{
                    fontSize: "34px",
                  }}
                >
                  {item.value}
                </h2>

              </div>

              <div
                style={iconBox(item.color)}
              >
                {item.icon}
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;