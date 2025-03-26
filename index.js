const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/dbcon");
const courseRouter = require("./routes/courseRoute");
const authRouter = require("./routes/authRoute");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/courses",courseRouter );

app.get("/", (req, res) => {
    res.send("Welcome to the course management system");
    });

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => 
{
if (err) throw err;
console.log(`Server is  runni ng on port ${PORT}`);

});