let projects = document.querySelector(".projects");
// skills click
let skills = document.querySelectorAll(".skill");
let srcs = ["https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)","https://en.wikipedia.org/wiki/CSS","https://en.wikipedia.org/wiki/Figma_(software)",
"https://en.wikipedia.org/wiki/Git","https://en.wikipedia.org/wiki/HTML","https://en.wikipedia.org/wiki/JavaScript"]
skills.forEach((e,index)=>{
 e.addEventListener("click",()=>{
  window.open(srcs[index],"_blank")
 })
})
// cv click
let cv = document.querySelector(".cv");
cv.addEventListener("click",()=>{
  window.open("https://drive.google.com/file/d/1AS0MeYz-_15lxKXf5_rmNEu6a4oyBeLG/view?usp=sharing","_blank")
})
// get data from json file
fetch("project.json").then(
  (res)=>{
    return n = res.json();
  }
).then((n)=>{
  let keys = Object.keys(n);
  for (let i = 0; i < 3; i++) {
    createProject(n[keys[i]].img,n[keys[i]].name,n[keys[i]].time,n[keys[i]].description,n[keys[i]].link)
  }

  // make the pagination system
  let pags = document.querySelectorAll(".pagination span");
  pags.forEach((e)=>{
    e.addEventListener("click",()=>{
      projects.innerHTML = "";
      let start = [1,4,7,10,13,16]
      for (let i = start[+e.innerHTML - 1]; i < start[+e.innerHTML - 1] + 3; i++) {
        createProject(n[`project-${i}`].img,n[`project-${i}`].name,n[`project-${i}`].time,n[`project-${i}`].description,n[`project-${i}`].link)
      }
    })
  })
})
// create projects function
function createProject(i,n,t,d,l){
  let div = document.createElement("div");
  div.classList.add("project");
  div.style.backgroundImage = `url(${i})`;
  div.style.backgroundRepeat = "no-repeat";
  div.style.backgroundSize = "contain";
  div.style.backgroundPosition = "center";
  projects.appendChild(div);
  let hoverText = document.createElement("div");
  hoverText.classList.add("hover-text");
  div.appendChild(hoverText);
  let name = document.createElement("h3");
  let title = document.createTextNode(n); // title
  hoverText.appendChild(name);
  name.appendChild(title); 
  let time = document.createElement("p");
  let timeText = document.createTextNode(t); // time
  hoverText.appendChild(time);
  time.appendChild(timeText);
  let des = document.createElement("p");
  let desText = document.createTextNode(d); // description
  hoverText.appendChild(des);
  des.appendChild(desText);
  let button = document.createElement("button");
  button.classList.add("go")
  let btntext = document.createTextNode("Go Site");
  button.appendChild(btntext);
  button.onclick = function(){
    window.open(l,"_blank")
  }
  hoverText.appendChild(button)
}

let cert = document.querySelectorAll(".certs img");
let certsrcs = ["https://drive.google.com/file/d/1ruq08uArmQDcYWFVSfAVHTPY7m2vM1ZV/view?usp=sharing","https://drive.google.com/file/d/1EDTkgwa-mZvnR_9JAqCvd3-WFzOWNv9_/view?usp=sharing","https://www.m3aarf.com/storage/cer/7858445374.jpg"]
cert.forEach((e,index)=>{
 e.addEventListener("click",()=>{
  window.open(certsrcs[index],"_blank")
 })
})
// Add an event listener to the 'load' event
window.addEventListener('load', function() {
  // Scroll to the top of the page
  window.scrollTo(0, 0);
});
if(window.innerWidth < 1000 ){
  swal("For a better experience", "please use a laptop or computer")  
}

// communicate
let links = document.querySelectorAll(".links .link")
let linkSrcs = ["https://www.facebook.com/riyad.osman.35/","https://github.com/riadosman/","mailto:riyados973@gmail.com","https://www.linkedin.com/in/riad-osman-6598ba24a/","https://www.upwork.com/freelancers/~01b653a11cced80aff"]
links.forEach((e,i)=>{
  e.addEventListener("click",()=>{
    window.open(linkSrcs[i],"_blank")
  })
})

// loading
window.onload = function(){
    let spn = document.querySelector(".spinner")
    spn.style.display = "flex";
    setTimeout(()=>{
        spn.style.display = "none";
    },2000)
}