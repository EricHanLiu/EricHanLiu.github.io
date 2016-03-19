var background = [
  {link: "url(/css/background.jpg)", color: "#894264"},
  {link: "url(/css/background1.jpg)", color: "#93B6CC"},
  {link: "url(/css/background2.jpg)", color: "#9FAFBF"},
  {link: "url(/css/background3.jpg)", color: "#916852"},
  {link: "url(/css/background4.jpeg)", color: "#6D8893"}, 
  {link: "url(/css/background5.jpeg)", color: "#8A8A8A"},
  {link: "url(/css/background6.jpeg)", color: "#636363"},
  {link: "url(/css/background7.jpeg)", color: "#BBCAD0"},
];

//Change background image to random choice every 7s
setInterval(function() {
  var chosenImage = Math.floor(Math.random() * 8);
  document.body.style.backgroundImage = background[chosenImage].link;
  document.getElementById("name").style.color = background[chosenImage].color;
  document.getElementsByClassName("border")[0].style.borderColor = background[chosenImage].color;
  document.getElementsByClassName("border")[1].style.borderColor = background[chosenImage].color;
}, 7000);



//CODE FOR PAGE CHANGE AND TEXT TRANSITION
function navClear() {
    document.querySelector("#aboutLink").style.color = "#FFFFFF";
    document.querySelector("#homeLink").style.color = "#FFFFFF";
}

function navColor(link) {
    document.querySelector(link).style.color = "#9FAFBF";
}

//function to select the id for easier manipulation (don't have to get id for each)
function $(id){
    return document.getElementById(id); 
}

//default shows the home page 
$('page-').classList.add('clicked');


window.addEventListener("hashchange", function() {
  var hash = window.location.hash;
  hash = hash.slice(1); // Removes the # at the start of the hash to fit with function names
    if (hash == "") {  
        navClear();
        navColor("#homeLink");
        $("page-about").classList.remove("clicked");
        setTimeout( function() {
            $("page-").classList.add("clicked");
        }, 250);
    } else if (hash == "about") {
        navClear();
        navColor("#aboutLink");
        $("page-").classList.remove("clicked");  
        setTimeout( function() {
            $("page-about").classList.add("clicked");
        }, 250);
    }
});

window.dispatchEvent(new Event("hashchange"));

