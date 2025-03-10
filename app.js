const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

app.post('/enhance', async (req, res) => {
    const text = req.body.text;
    if (!text) {
        return res.status(400).send({ error: 'Text input is required' });
    }

    try {
        const result = await model.generateContent(`Improve the following text into a single, clear, and concise version: ${text}`);
        const enhancedText = result.response.text();
        res.send({ enhanced_text: enhancedText });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.post('/modify', async (req, res) => {
    const text = req.body.text;
    const modification = req.body.modification;
    if (!text || !modification) {
        return res.status(400).send({ error: 'Text and modification are required' });
    }

    try {
        const result = await model.generateContent(`Modify the following text: ${text} as per this instruction: ${modification}. Provide only one version.`);
        const modifiedText = result.response.text();
        res.send({ modified_text: modifiedText });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
