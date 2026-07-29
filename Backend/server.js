// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");

// const connectDB = require("./Config/db");

// dotenv.config();
// connectDB();

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api/tasks", require("./routes/taskRoutes"));
// app.use("/api/auth", require("./Routes/authRoutes"));
// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });




const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");


const reportRoutes = require("./routes/reportRoutes");
const profileRoutes = require("./routes/profileRoutes");
const notificationRoutes = require("./routes/notificationRoutes");


const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/api/auth",
  require("./routes/authRoutes")
);
app.use(
  "/api/users",
  require("./routes/userRoutes")
);

app.use(
  "/api/projects",
  require(
    "./routes/projectRoutes"
  )
);

app.use(
  "/api/tasks",
  require(
    "./routes/taskRoutes"
  )
);

app.use(
  "/api/dashboard",
  require("./routes/dashboardRoutes")
);
app.use(
  "/api/reports",
  reportRoutes
);

app.use("/api/profile", profileRoutes);

app.use("/api/notifications", notificationRoutes)



app.get("/", (req, res) => {
  res.send("Server Running...");
});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server Running On Port ${PORT}`
  );
});