import dotenv from "dotenv";
import express, { Request, Response } from "express";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Hello World!" });
});

app.get("/health-check", (req: Request, res: Response) => {
  res.send({ status: "Up" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
