import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const exportPDF = ({
  cards,
  taskStatus,
  projectStatus,
  recentTasks,
  recentProjects,
}) => {
  const doc = new jsPDF();

  // ==========================
  // Title
  // ==========================

  doc.setFontSize(20);

  doc.text(
    "Task Manager Report",
    14,
    18
  );

  doc.setFontSize(11);

  doc.text(
    `Generated: ${new Date().toLocaleString()}`,
    14,
    26
  );

  // ==========================
  // Summary
  // ==========================

  autoTable(doc, {
    startY: 35,

    head: [["Summary", "Value"]],

    body: [
      [
        "Total Users",
        cards.totalUsers,
      ],

      [
        "Total Projects",
        cards.totalProjects,
      ],

      [
        "Total Tasks",
        cards.totalTasks,
      ],

      [
        "Completed Tasks",
        cards.completedTasks,
      ],
    ],
  });

  // ==========================
  // Task Status
  // ==========================

  autoTable(doc, {
    startY:
      doc.lastAutoTable.finalY + 10,

    head: [
      ["Task Status", "Count"],
    ],

    body: taskStatus.map(
      (item) => [
        item._id,
        item.count,
      ]
    ),
  });

  // ==========================
  // Project Status
  // ==========================

  autoTable(doc, {
    startY:
      doc.lastAutoTable.finalY + 10,

    head: [
      [
        "Project Status",
        "Count",
      ],
    ],

    body:
      projectStatus.map(
        (item) => [
          item._id,
          item.count,
        ]
      ),
  });

  // ==========================
  // Recent Tasks
  // ==========================

  autoTable(doc, {
    startY:
      doc.lastAutoTable.finalY + 10,

    head: [
      [
        "Task",

        "Project",

        "Assigned",

        "Priority",

        "Status",
      ],
    ],

    body:
      recentTasks.map(
        (task) => [

          task.taskName,

          task.projectId
            ?.projectName,

          task.assignedTo
            ?.email,

          task.priority,

          task.status,
        ]
      ),
  });

  // ==========================
  // Recent Projects
  // ==========================

  autoTable(doc, {
    startY:
      doc.lastAutoTable.finalY + 10,

    head: [
      [
        "Project",

        "Status",

        "Start",

        "End",
      ],
    ],

    body:
      recentProjects.map(
        (project) => [

          project.projectName,

          project.status,

          new Date(
            project.startDate
          ).toLocaleDateString(),

          new Date(
            project.endDate
          ).toLocaleDateString(),
        ]
      ),
  });

  doc.save(
    "TaskManager_Report.pdf"
  );
};

export default exportPDF;