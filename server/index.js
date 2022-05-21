import indexRouter from "./routes/index.js";
import express from "express";
import logger from "morgan";
// import usersRouter from "./routes/users";
// import adminRouter from "./routes/admin";
import cors from "cors";
const app = express();



app.use(cors({ origin: true }));
app.use(express.json());
app.use(logger("dev"));
// app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/api/v1", indexRouter);
// app.use("/api/v1/users", usersRouter);
// app.use("/api/v1/admin", adminRouter);

app.listen(8000)