# Text Enhancement API

This is a simple REST API built with **Node.js (Express.js)** that enhances user-provided text and modifies it based on user feedback using **Google Gemini API**.

---

## Features
- **Text Enhancement** - Improves text coherence and clarity.
- **Text Modification** - Allows modifications like shortening, lengthening, and tone adjustments.
- **Postman Compatible** - API is fully testable using **Postman**.

---

## Setup Instructions

### 1) Prerequisites
- Install **Node.js** (v14+ recommended)
- Get a **Google Gemini API Key** from Google AI Studio.

### 2) Clone the Repository
```bash
git clone https://github.com/ouibhav/Text-Enhancement-API
cd Text-Enhancement-API
```
### 3) Install Dependencies
```bash
npm install
```
### 4) Set Up Environment Variables
- Create a .env file in the root directory and add:
```bash
GOOGLE_API_KEY=your_google_api_key_here
PORT=8000
```
### 5) Start the Server
```bash
node app.js
```
- The API will be running at http://localhost:8000

## API Documentation

### 1. Text Enhancement
- **Endpoint :** POST /enhance
- **Description :** Enhances text by making it more clear and refined.
- **Request :**
```bash
{
  "text": "this is a simple example of a text that needs improvement"
}
```
- **Response :**
```bash
{
  "enhanced_text": "This is a refined example of text that requires enhancement."
}
```

### 2. Text Modification
- **Endpoint :** POST /modify
- **Description :** Modifies text based on user instructions (shorten, lengthen, change tone).
- **Request :**
```bash
{
  "text": "This is a long and detailed explanation that could be more concise.",
  "modification": "Shorten"
}
```
- **Response :**
```bash
{
  "modified_text": "This explanation could be more concise."
}
```

## Testing in Postman
- Download Postman.
- Import the provided Postman collection (JSON file).
- Set GOOGLE_API_KEY in Postman under Environment Variables.
- Run test cases.
