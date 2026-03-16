console.log("AI Form Extension Loaded");

/* --------------------------
KNOWN PROFILE DATA
--------------------------- */

const knownData = {
name: "Mohd Kaif",
email: "your_email@gmail.com",
phone: "9999999999",
college: "Your College Name"
};


/* --------------------------
AI REQUEST FUNCTION
--------------------------- */

function askAI(question){

return new Promise((resolve)=>{

chrome.runtime.sendMessage(
{
type:"ASK_AI",
question:question
},
(response)=>{

if(!response){
resolve("AI failed");
return;
}

resolve(response);

});

});

}


/* --------------------------
AUTOFILL BASIC FIELDS
--------------------------- */

function autofillKnownFields(field){

try{

const question =
field.closest('[role="listitem"]')
.innerText
.toLowerCase();

if(question.includes("name")){
field.value = knownData.name;
}

if(question.includes("email")){
field.value = knownData.email;
}

if(question.includes("phone")){
field.value = knownData.phone;
}

if(question.includes("college")){
field.value = knownData.college;
}

field.dispatchEvent(
new Event('input',{bubbles:true})
);

}catch(err){

console.log("Autofill error:",err);

}

}


/* --------------------------
ADD AI BUTTONS
--------------------------- */

function addButtons(){

const fields = document.querySelectorAll(
'textarea[jsname="YPqjbf"], input[type="text"], input[type="email"], input[type="tel"]'
);

fields.forEach((field)=>{

if(field.dataset.aiAttached) return;

field.dataset.aiAttached = true;


/* Autofill known data */

autofillKnownFields(field);


/* Create AI button */

const btn = document.createElement("button");

btn.innerText = "AI Answer";
btn.className = "ai-btn";

btn.style.marginLeft = "8px";
btn.style.padding = "4px 8px";
btn.style.fontSize = "12px";
btn.style.cursor = "pointer";


/* AI click handler */

btn.onclick = async ()=>{

btn.innerText = "Generating...";

try{

const question =
field.closest('[role="listitem"]').innerText;

const answer = await askAI(question);

field.focus();

field.value = answer;

field.dispatchEvent(
new Event('input',{bubbles:true})
);

}catch(err){

console.error(err);

field.value = "AI Error";

}

btn.innerText = "AI Answer";

};


/* Attach button */

field.parentElement.appendChild(btn);

});

}


/* --------------------------
OBSERVE FORM CHANGES
(Google Forms loads dynamically)
--------------------------- */

const observer = new MutationObserver(()=>{

addButtons();

});

observer.observe(document.body,{
childList:true,
subtree:true
});


/* Initial run */

addButtons();