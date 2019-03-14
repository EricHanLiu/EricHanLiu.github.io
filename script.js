// background images to be slideshowed
// color specifies the text list's color, unused right now
let background = [ 
  {link: "url(images/background.jpg)", color: "#FFFFFF"},
  {link: "url(images/background2.jpg)", color: "#FFFFFF"},
  {link: "url(images/background3.jpg)", color: "#FFFFFF"},
  {link: "url(images/background4.jpg)", color: "#FFFFFF"}, 
];
// text that displays on background images on main window
let text = [
	"Adept Software Developer",
    "Distinguished Musician"
];

// randomize background on page load
shuffle(background);

// change background image to random choice every 7s
document.getElementById("banner").style.background = background[0].link + " center / cover";
setInterval(() => {
	document.getElementById("banner").style.background = background[1].link + " center / cover";
	//unused right now since all colours are white
	document.getElementById("info").style.color = background[1].color;
	background.push(background.shift());
}, 7000);

// change text every 6 seconds
document.getElementById("info").innerHTML = text[0];
setInterval(() => {
	document.getElementById("info").style.opacity = "0";
	setTimeout(function() {
		document.getElementById("info").innerHTML = text[0];
		document.getElementById("info").style.opacity = "1";
	}, 500);
	text.push(text.shift());
}, 6000);

// listener to scroll back to top of page
$("a").click(function() {
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
    return false;
});

//change info header opacity on scroll 
window.addEventListener("scroll", () => {
    let a = document.body.scrollTop;
	if (a > "10") {
		document.getElementById("top").style.opacity = "0.5";
	} else {
		document.getElementById("top").style.opacity = "0.8";
	}
	if (a > "400") {
		document.getElementById("back").style.opacity = "1";
		document.getElementById("back").style.position = "fixed";
		document.getElementById("back").style.pointerEvents = "auto";
	}
	else {
		document.getElementById("back").style.opacity = "0";
		document.getElementById("back").style.pointerEvents = "none";
	}
});

function shuffle(a) 
{
    let j, x, i;
    for (i = a.length; i; i -= 1) 
    {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
