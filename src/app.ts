import dotenv from "dotenv";
import express, { Request, Response } from "express";

dotenv.config();

const app = express();
app.use(express.json()); // parser to allows us accept json data like req.body
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Tae ng  kalabaw!" });
});

app.get("/health-check", (req: Request, res: Response) => {
  res.send({ status: "Up" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
