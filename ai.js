const roleProfiles={

aiml:`
Candidate: Mohd Kaif
Applying for: AI/ML Intern

Skills:
Machine Learning
Deep Learning
Computer Vision
Python
CNN Models

Experience:
Built ML models, CNN systems, and RAG pipelines.
`,

sde:`
Candidate: Mohd Kaif
Applying for: Software Engineer Intern

Skills:
Python
JavaScript
Backend Development
API Integration

Experience:
Built automation tools, scripts, and browser extensions.
`,

data:`
Candidate: Mohd Kaif
Applying for: Data Analyst Intern

Skills:
Python
Pandas
SQL
Data Visualization

Experience:
Worked on data cleaning, analysis and extracting insights.
`,

product:`
Candidate: Mohd Kaif
Applying for: Product Intern

Skills:
Product thinking
User research
Strategy
Market analysis

Experience:
Worked on AI tools and automation products.
`

};

const selectedRole="aiml";

async function askAI(question){

try{

console.log("Sending question to AI:",question);

const response = await fetch("https://api.groq.com/openai/v1/chat/completions",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":"Bearer your_api_key_here"
},

body:JSON.stringify({

model:"llama3-8b-8192",

messages:[
{
role:"system",
content:"Answer job application questions briefly (1-2 lines)."
},
{
role:"user",
content:roleProfiles[selectedRole] + "\n\nQuestion:\n" + question
}
]

})

});

const data = await response.json();

console.log("AI response:",data);

if(!data.choices){
return "AI could not generate answer";
}

return data.choices[0].message.content;

}catch(err){

console.error(err);
return "AI error";

}

}