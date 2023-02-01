let title=document.querySelector("#title");
let header = document.querySelector("header");
let text=["We Build Buildings Professionally","Constructing Spaces For You","WE DESIGN ALL KINDS OF BUILDINGS","PROVIDING ALL KINDS OF CONSTRUCTION SERVICES","WE BUILD YOUR DREAMS"];
let photos = ["crane","towers","map","meeting","bulding"];
let i=0;

function change() {
    i = i+1
    if(i>=text.length){
        i=0
        title.innerHTML = `${text[i].toUpperCase()}`;
        header.style.cssText = `background-image:linear-gradient(rgba(4,9,30,0.25),rgba(4,9,30,0.3)),url(images/${photos[i]}.jpg);`
    }else{
        title.innerHTML = `${text[i].toUpperCase()}`;
        header.style.cssText = `background-image:linear-gradient(rgba(4,9,30,0.25),rgba(4,9,30,0.3)),url(images/${photos[i]}.jpg);`
    }
};

setInterval(change,5000)
