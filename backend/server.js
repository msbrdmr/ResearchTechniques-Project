import express from "express";
import mysql from "mysql2";
import cors from "cors";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"], //front end url
    methods: ["GET", "POST"],
    credentials: true,
  })
);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pa$$w0rd2094",
  database: "user_data",
});

app.post("/", (req, res) => {
  const sqlQuery =
    "SELECT * FROM user_data.login_info WHERE UserMail = ? AND UserPassword = ?";
  db.query(
    sqlQuery,
    [req.body.UserMail, req.body.UserPassword],
    (err, data) => {
      if (err) {
        console.log(err);
        return res.json({ Message: "Server Side error" });
      }
      if (data.length > 0) {
        const token = jwt.sign(
          { email: req.body.email },
          process.env.JWT_SECRET,
          { expiresIn: "1d" }
        );
        res.cookie("token",token)

        // mysqlden donen data
        console.log("Data response:", data);

        return res.json({ Message: "Success", token: token });
      } else {
        console.log("No matching record found. Data:", data);
        return res.json({ Message: "Bilgilerinizi Kontrol Ediniz" });
      }
    }
  );
});

app.listen(8081, () => console.log("listening"));
