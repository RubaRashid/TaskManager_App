import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const exportExcel = ({
  cards,
  taskStatus,
  projectStatus,
  recentTasks,
  recentProjects,
}) => {
  const workbook =
    XLSX.utils.book_new();

  // Summary

  const summary =
    XLSX.utils.json_to_sheet([
      {
        TotalUsers:
          cards.totalUsers,

        TotalProjects:
          cards.totalProjects,

        TotalTasks:
          cards.totalTasks,

        CompletedTasks:
          cards.completedTasks,
      },
    ]);

  XLSX.utils.book_append_sheet(
    workbook,
    summary,
    "Summary"
  );

  // Task Status

  const taskSheet =
    XLSX.utils.json_to_sheet(
      taskStatus
    );

  XLSX.utils.book_append_sheet(
    workbook,
    taskSheet,
    "Task Status"
  );

  // Project Status

  const projectSheet =
    XLSX.utils.json_to_sheet(
      projectStatus
    );

  XLSX.utils.book_append_sheet(
    workbook,
    projectSheet,
    "Project Status"
  );

  // Recent Tasks

  const tasks =
    recentTasks.map(
      (task) => ({
        Task:
          task.taskName,

        Project:
          task.projectId
            ?.projectName,

        Assigned:
          task.assignedTo
            ?.email,

        Status:
          task.status,

        Priority:
          task.priority,
      })
    );

  XLSX.utils.book_append_sheet(
    workbook,
    XLSX.utils.json_to_sheet(
      tasks
    ),
    "Recent Tasks"
  );

  // Recent Projects

  const projects =
    recentProjects.map(
      (project) => ({
        Project:
          project.projectName,

        Status:
          project.status,

        Start:
          project.startDate,

        End:
          project.endDate,
      })
    );

  XLSX.utils.book_append_sheet(
    workbook,
    XLSX.utils.json_to_sheet(
      projects
    ),
    "Recent Projects"
  );

  const buffer =
    XLSX.write(
      workbook,
      {
        bookType: "xlsx",
        type: "array",
      }
    );

  saveAs(
    new Blob([buffer]),
    "TaskManager_Report.xlsx"
  );
};

export default exportExcel;