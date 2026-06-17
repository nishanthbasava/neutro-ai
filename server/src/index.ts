import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import { openai } from "./services/openai";

dotenv.config({ path: "../.env.local" });

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running");
});

app.listen(5000, () => {
  console.log("Running on port 5000");
});

/** 
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await openai.responses.create({
      model: "gpt-5.5",
      input: message,
    });

    res.json({ reply: response.output_text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI request failed" });
  }
});
*/