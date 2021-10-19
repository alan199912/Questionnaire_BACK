const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

require("dotenv").config();
const { dbConnect } = require("./db/connectionDB");

const { initialQuestionnaire } = require("./lib/initialSetup");

const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");
const questionnaireRouter = require("./routes/questionnaireRouter");
const answerRouter = require("./routes/answerRouter");
const emailRouter = require("./routes/emailRouter");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:4200",
    optionsSuccessStatus: 200,
  })
);

dbConnect();
initialQuestionnaire();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1", userRouter);
app.use("/api/v1", questionnaireRouter);
app.use("/api/v1", answerRouter);
app.use("/api/v1", emailRouter);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}!`);
});
