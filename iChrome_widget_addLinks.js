var toolbar = parent.document.body.getElementsByClassName('toolbar')[0];
toolbar.style.position="fixed";
toolbar.style.zIndex = "1000";
toolbar.style.backgroundColor = "beige";
var links = parent.document.body.getElementsByClassName('links')[0];
//1
var iLink = document.createElement("a");
iLink.href = "https://keep.google.com";
iLink.innerHTML = "Keep";
links.appendChild(iLink);
//2
var iLink = document.createElement("a");
iLink.href = "https://play.google.com";
iLink.innerHTML = "Play";
links.appendChild(iLink);
//3
var iLink = document.createElement("a");
iLink.href = "https://play.google.com/music";
iLink.innerHTML = "Play­µ¼Ö";
links.appendChild(iLink);
//4
var iLink = document.createElement("a");
iLink.href = "http://fb.me";
iLink.innerHTML = "Facebook";
links.appendChild(iLink);
//3