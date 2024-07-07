require('dotenv').config();
const express = require('express');
const CORS = require('cors');

const { GoogleGenerativeAI } = require("@google/generative-ai");
//express instance
const app = express();
//middleware
const cors_options={
  origin:["http://localhost:5173","http://localhost:5174"]
}
app.use(CORS(cors_options))
app.use(express.json());
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//Generate content rate
app.post('/generate', async (req, res) => {
  const { prompt } = req.body;
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    res.send(text);

  } catch (error) {
    console.log(error)
    res.status(500).send("failed")
  }
});
//start server
app.listen(8080, console.log("started sucessfully"));