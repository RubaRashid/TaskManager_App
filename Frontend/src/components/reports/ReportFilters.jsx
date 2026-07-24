import {
    FaSearch,
    FaFilePdf,
    FaFileExcel,
} from "react-icons/fa";

function ReportFilters({
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    onExportPDF,
    onExportExcel,
}) {
    return (
        <div
            className="bg-white p-4 mb-4"
            style={{
                borderRadius: "18px",
                boxShadow:
                    "0 4px 20px rgba(0,0,0,.05)",
            }}
        >
            <div className="row g-3 align-items-center">

                {/* Search */}

                <div className="col-lg-4">

                    <div className="input-group">

                        <span className="input-group-text bg-white">
                            <FaSearch />
                        </span>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search reports..."
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                        />

                    </div>

                </div>

                {/* Status */}

                <div className="col-lg-2">

                    <select
                        className="form-select"
                        value={statusFilter}
                        onChange={(e) =>
                            setStatusFilter(
                                e.target.value
                            )
                        }
                    >

                        <option value="All">
                            All Status
                        </option>

                        <option value="Pending">
                            Pending
                        </option>

                        <option value="In Progress">
                            In Progress
                        </option>

                        <option value="Completed">
                            Completed
                        </option>

                    </select>

                </div>

                {/* Start Date */}

                <div className="col-lg-2 me-4">
                    <div className="d-flex align-items-center me-1">
                        <span
                            className="me-1 fw-semibold text-muted"
                            style={{
                                whiteSpace: "nowrap",
                            }}
                        >
                            From
                        </span>
                        <input
                            type="date"
                            className="form-control"
                            value={startDate}
                            onChange={(e) =>
                                setStartDate(
                                    e.target.value
                                )
                            }
                        />
                    </div>


                </div>

                {/* End Date */}

                <div className="col-lg-2">
                    <div className="d-flex align-items-center">
                        <span
                            className="me-1 fw-semibold text-muted"
                            style={{
                                whiteSpace: "nowrap",
                            }}
                        >
                            To
                        </span>
                        <input
                            type="date"
                            className="form-control"
                            value={endDate}
                            onChange={(e) =>
                                setEndDate(
                                    e.target.value
                                )
                            }
                        />
                    </div>



                </div>

                {/* Export */}

                <div className="col-lg-1">

                    <div className="d-flex justify-content-end">

                        {/* <button
              className="btn btn-outline-danger"
              onClick={onExportPDF}
            >
              <FaFilePdf />
            </button>

            <button
              className="btn btn-outline-success"
              onClick={onExportExcel}
            >
              <FaFileExcel />
            </button> */}
                        <div className="d-flex justify-content-end">

                            <button
                                className="btn btn-outline-danger d-flex align-items-center"
                                onClick={onExportPDF}
                            >
                                <FaFilePdf className="me-1" />
                                PDF
                            </button>

                            {/* <button
                                className="btn btn-outline-success d-flex align-items-center"
                                onClick={onExportExcel}
                            >
                                <FaFileExcel className="me-2" />
                                Excel
                            </button> */}

                        </div>
                        
                    </div>

                </div>

            </div>
        </div>
    );
}

export default ReportFilters;