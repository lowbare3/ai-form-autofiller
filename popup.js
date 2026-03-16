document.getElementById("fill").addEventListener("click", async () => {

const role=document.getElementById("role").value;

const [tab]=await chrome.tabs.query({active:true,currentWindow:true});

chrome.scripting.executeScript({

target:{tabId:tab.id},

func:(selectedRole)=>{

window.selectedRole=selectedRole;

const profile={
name:"Mohd Kaif",
email:"your@email.com",
phone:"+91XXXXXXXX",
college:"XYZ University",
github:"https://github.com/yourusername",
linkedin:"https://linkedin.com/in/yourusername"
};

const inputs=document.querySelectorAll("input,textarea");

inputs.forEach(el=>{

let label=(el.getAttribute("aria-label")||"").toLowerCase();

if(label.includes("name")) el.value=profile.name;
if(label.includes("email")) el.value=profile.email;
if(label.includes("phone")) el.value=profile.phone;
if(label.includes("college")) el.value=profile.college;
if(label.includes("github")) el.value=profile.github;
if(label.includes("linkedin")) el.value=profile.linkedin;

});

},

args:[role]

});

});