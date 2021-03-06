const indexRouter = require("./routes/index");
const express = require("express");
const logger = require("morgan");
// import usersRouter from "./routes/users";
// import adminRouter from "./routes/admin";
const app = express();
const cors = require("cors");


app.use(cors({ origin: true }));
app.use(express.json());
app.use(logger("dev"));
// app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/api/v1", indexRouter);
// app.use("/api/v1/users", usersRouter);
// app.use("/api/v1/admin", adminRouter);

app.listen(8000)