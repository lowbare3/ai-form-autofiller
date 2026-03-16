AI Form Autofill Chrome Extension

A Chrome extension that automatically fills common fields in Google Forms and generates AI-powered answers for application questions using the Groq API.

This tool helps speed up job applications, internships, surveys, and repetitive form submissions by reducing manual typing.

Features

Auto-fills common fields:

Name

Email

Phone number

College

Adds AI Answer buttons next to form fields

Generates answers for:

Motivation questions

Experience descriptions

Short essays

Application prompts

Uses Groq LLM API for fast response generation

Works directly inside Google Forms

How It Works

The extension detects text input fields in Google Forms.

Known fields (name, email, phone, etc.) are automatically filled.

An AI Answer button is added next to text areas.

When clicked:

The question text is extracted

Sent to the Groq API

A short AI-generated answer is returned

The field is filled automatically.

Project Structure
ai-form-autofill/
│
├── manifest.json      # Chrome extension configuration
├── content.js         # Injects buttons and autofills fields
├── background.js      # Handles API requests to Groq
├── style.css          # Button styling
└── popup.html         # Extension popup UI
Installation

Clone the repository

git clone https://github.com/yourusername/ai-form-autofill.git

Open Chrome and go to

chrome://extensions

Enable Developer Mode

Click Load unpacked

Select the extension folder.

The extension will now run automatically on Google Forms.

Setup Groq API

Create an API key at

https://console.groq.com/keys

Open background.js

Replace:

YOUR_API_KEY

with your Groq API key.

Example:

Authorization: Bearer gsk_xxxxxxxxxxxxxxxxx
Usage

Open a Google Form.

The extension will:

Auto-fill known fields

Add AI Answer buttons.

Click AI Answer for any question to generate a response.

Example Use Cases

Job applications

Internship forms

Scholarship applications

Surveys

Repetitive registration forms

Tech Stack

JavaScript

Chrome Extensions (Manifest V3)

Groq LLM API

DOM manipulation

Limitations

Works best with text-based questions

Google Forms layout changes may affect selectors

Requires an active Groq API key

Future Improvements

Role-based profiles (SDE / AI / Data / Product)

Auto-detect essay questions

One-click full form completion

Support for other form platforms

Resume context integration

License

MIT License
