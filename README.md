# AI Form Autofill

A Chrome extension that automatically fills Google Forms using AI-powered responses based on predefined candidate profiles. Perfect for job applications and form submissions.

## Features

- **Automatic Field Detection**: Automatically detects and fills common fields like name, email, phone, and college
- **AI-Powered Responses**: Uses Groq AI API to generate intelligent answers for complex questions
- **Role-Based Profiles**: Supports different professional profiles (AI/ML, Software Engineer, Data Analyst, Product)
- **Google Forms Integration**: Seamlessly works with Google Forms
- **One-Click AI Answers**: Adds "AI Answer" buttons next to form fields for instant AI-generated responses

## Installation

### Prerequisites
- Google Chrome browser
- A Groq API key (get one from [groq.com](https://groq.com))

### Steps

1. **Download or Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/form-ai-autofill.git
   cd form-ai-autofill
   ```

2. **Configure API Key**
   - Open `background.js`
   - Replace `YOUR_API_KEY` with your actual Groq API key
   - Optionally, update the role profiles in `ai.js` with your information

3. **Load Extension in Chrome**
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right)
   - Click "Load unpacked"
   - Select the folder containing the extension files
   - The extension should now appear in your extensions list

4. **Verify Installation**
   - Click the extension icon in Chrome toolbar
   - You should see "AI Form Autofill Active"

## Usage

1. **Navigate to a Google Form**
   - Go to any Google Form (forms.google.com)

2. **Automatic Filling**
   - The extension will automatically fill basic fields like name, email, phone, and college

3. **AI-Powered Answers**
   - For more complex questions, click the "AI Answer" button next to any text field
   - The AI will generate a response based on your selected professional profile

4. **Switch Profiles** (Optional)
   - The default profile is AI/ML focused
   - To change profiles, modify the `selectedRole` variable in `ai.js`

## Configuration

### API Key Setup
Replace `YOUR_API_KEY` in `background.js` with your Groq API key:

```javascript
"Authorization":"Bearer YOUR_ACTUAL_API_KEY_HERE"
```

### Customize Profiles
Edit the `roleProfiles` object in `ai.js` to match your background:

```javascript
const roleProfiles = {
  aiml: `
    Candidate: Your Name
    Applying for: AI/ML Intern
    Skills: [Your skills]
    Experience: [Your experience]
  `,
  // ... other profiles
};
```

### Update Personal Information
Modify the `knownData` object in `content.js`:

```javascript
const knownData = {
  name: "Your Full Name",
  email: "your.email@example.com",
  phone: "Your Phone Number",
  college: "Your College Name"
};
```

## Supported Form Fields

- Text inputs
- Email inputs
- Phone inputs
- Textarea fields
- Automatically detected fields with keywords: name, email, phone, college

## API Usage

This extension uses the Groq API with the Llama 3 8B model. API calls are made for each "AI Answer" button click. Monitor your API usage on the Groq dashboard.

## Privacy

- All AI processing happens through Groq's secure API
- No personal data is stored or transmitted except what's necessary for form filling
- API keys are stored locally in the extension

## Troubleshooting

**Extension not loading:**
- Ensure all files are in the correct directory structure
- Check that manifest.json is valid JSON
- Try reloading the extension in chrome://extensions/

**AI buttons not appearing:**
- Make sure you're on a Google Form (forms.google.com)
- Refresh the page after loading the extension
- Check browser console for errors

**API errors:**
- Verify your Groq API key is correct and has credits
- Check network connectivity
- Look at browser console for detailed error messages

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source. Feel free to use and modify as needed.

## Disclaimer

This tool is for educational and productivity purposes. Use responsibly and in accordance with Google Forms terms of service and applicable laws.