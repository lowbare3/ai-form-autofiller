chrome.runtime.onMessage.addListener(async (request, sender, sendResponse)=>{

if(request.type==="ASK_AI"){

const response = await fetch("https://api.groq.com/openai/v1/chat/completions",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":"Bearer YOUR_API_KEY"
},

body:JSON.stringify({

model:"llama3-8b-8192",

messages:[
{role:"system",content:"Answer job application questions briefly."},
{role:"user",content:request.question}
]

})

});

const data = await response.json();

sendResponse(data.choices[0].message.content);

}

return true;

});