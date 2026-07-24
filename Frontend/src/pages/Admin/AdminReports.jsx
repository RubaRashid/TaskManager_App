import {
  FaUsers,
  FaTasks,
  FaCheckCircle,
  FaClock,
  FaDownload,
} from "react-icons/fa";
const style ={
  text:{
    textAlign: "start !important" 
  }
}
function AdminReports() {
  const reports = [
    {
      id: 1,
      name: "Monthly Tasks Report",
      generatedBy: "Admin",
      date: "15 Aug 2025",
      status: "Completed",
    },
    {
      id: 2,
      name: "Users Activity Report",
      generatedBy: "Admin",
      date: "12 Aug 2025",
      status: "Completed",
    },
    {
      id: 3,
      name: "Projects Summary",
      generatedBy: "Admin",
      date: "10 Aug 2025",
      status: "Pending",
    },
  ];

  return (
    <>
      <div style={style.text} className="d-flex justify-content-between text-align-left mb-4">
        <div>
          <h4 className="fw-bold text-align-left mb-1">
            Reports
          </h4>

          <p className="text-muted mb-0">
            Analytics & reports overview
          </p>
        </div>

        <button className="btn btn-primary">
          <FaDownload className="me-2" />
          Export Report
        </button>
      </div>

      {/* <div className="row g-4 mb-4">

        <div className="col-md-3">
          <div className="card border-0 shadow-sm p-3">
            <h6>Total Users</h6>
            <h3>120</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-0 shadow-sm p-3">
            <h6>Total Tasks</h6>
            <h3>450</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-0 shadow-sm p-3">
            <h6>Completed</h6>
            <h3>320</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-0 shadow-sm p-3">
            <h6>Pending</h6>
            <h3>130</h3>
          </div>
        </div>

      </div> */}



        <div className="row g-4 mb-4">

  <div className="col-md-3">
    <div
      className="p-4 h-100"
      style={{
        background: "#eef2ff",
        borderRadius: "18px",
      }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <p
            className="mb-2"
            style={{
              color: "#6366f1",
              fontWeight: 600,
            }}
          >
            Total Users
          </p>

          <h2 className="mb-0 fw-bold">
            120
          </h2>
        </div>

        <div
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "14px",
            background: "#6366f1",
            color: "#fff",
          }}
          className="d-flex align-items-center justify-content-center fs-4"
        >
          <FaUsers />
        </div>
      </div>
    </div>
  </div>

  <div className="col-md-3">
    <div
      className="p-4 h-100"
      style={{
        background: "#effcf6",
        borderRadius: "18px",
      }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <p
            className="mb-2"
            style={{
              color: "#10b981",
              fontWeight: 600,
            }}
          >
            Total Tasks
          </p>

          <h2 className="mb-0 fw-bold">
            450
          </h2>
        </div>

        <div
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "14px",
            background: "#10b981",
            color: "#fff",
          }}
          className="d-flex align-items-center justify-content-center fs-4"
        >
          <FaTasks />
        </div>
      </div>
    </div>
  </div>

  <div className="col-md-3">
    <div
      className="p-4 h-100"
      style={{
        background: "#fff8e7",
        borderRadius: "18px",
      }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <p
            className="mb-2"
            style={{
              color: "#f59e0b",
              fontWeight: 600,
            }}
          >
            Completed
          </p>

          <h2 className="mb-0 fw-bold">
            320
          </h2>
        </div>

        <div
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "14px",
            background: "#f59e0b",
            color: "#fff",
          }}
          className="d-flex align-items-center justify-content-center fs-4"
        >
          <FaCheckCircle />
        </div>
      </div>
    </div>
  </div>

  <div className="col-md-3">
    <div
      className="p-4 h-100"
      style={{
        background: "#fff1f2",
        borderRadius: "18px",
      }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <p
            className="mb-2"
            style={{
              color: "#ef4444",
              fontWeight: 600,
            }}
          >
            Pending
          </p>

          <h2 className="mb-0 fw-bold">
            130
          </h2>
        </div>

        <div
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "14px",
            background: "#ef4444",
            color: "#fff",
          }}
          className="d-flex align-items-center justify-content-center fs-4"
        >
          <FaClock />
        </div>
      </div>
    </div>
  </div>

</div>



      <div
        style={{
          border: "1px solid #e9ecef",
          borderRadius: "14px",
          overflow: "hidden",
        }}
      >
        <table className="table table-hover mb-0">
          <thead className="table-light">
            <tr>
              <th>Report Name</th>
              <th>Generated By</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {reports.map((report) => (
              <tr key={report.id}>
                <td>{report.name}</td>
                <td>{report.generatedBy}</td>
                <td>{report.date}</td>
                <td>
                  <span
                    className={`badge ${
                      report.status === "Completed"
                        ? "bg-success"
                        : "bg-warning text-dark"
                    }`}
                  >
                    {report.status}
                  </span>
                </td>

                <td>
                  <button className="btn btn-sm btn-outline-primary">
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminReports;