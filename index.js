const showButton = document.querySelector(".showButton");
const sideBar = document.querySelector("aside");
const overlay = document.querySelector(".overlay");
const hideButton = document.querySelector(".hideButton");
showButton.onclick = (event) => {
    sideBar.style.width = "300px";
    sideBar.style.padding = "20px";
    overlay.style.display="block";
}
hideButton.onclick = (event) => {
    sideBar.style.width = "0";
    sideBar.style.padding = "0";
    overlay.style.display="none";
}