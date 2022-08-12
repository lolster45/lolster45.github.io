// let icons = document.querySelectorAll(".icon");
let closeModal = document.querySelectorAll(".closeModal");
let mainOverlay = document.querySelectorAll(".mainOverlay");

let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");
let icon3 = document.getElementById("icon3");
let icon4 = document.getElementById("icon4");
let icon5 = document.getElementById("icon5");
let icon6 = document.getElementById("icon6");

let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");

icon1.addEventListener("click", function () {
    box1.classList.add("mainOverlay");
    box1.classList.add("overlayActive");
})

 icon2.addEventListener("click", function () {
     box2.classList.add("mainOverlay");
     box2.classList.add("overlayActive");
 })

 icon3.addEventListener("click", function () {
     box3.classList.add("mainOverlay");
     box3.classList.add("overlayActive");
 })
 icon4.addEventListener("click", function () {
     box4.classList.add("mainOverlay");
     box4.classList.add("overlayActive");
 })
 icon5.addEventListener("click", function () {
     box5.classList.add("mainOverlay");
     box5.classList.add("overlayActive");
 })
 icon6.addEventListener("click", function () {
     box6.classList.add("mainOverlay");
     box6.classList.add("overlayActive");
 })



// This below allows you to exit out of the modal by pressing the "X" button.
closeModal.forEach(modal => {
    modal.addEventListener("click", function () {
        mainOverlay.forEach(overlay => {
            overlay.classList.remove("overlayActive");
        })
    })
})

let newBtn = document.querySelectorAll(".hiddenBtn");

newBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        mainOverlay.forEach(overlay => {
            overlay.classList.remove("overlayActive");
        })
    })
})


let clickNav = document.getElementById("clickNav");
let oldNav = document.getElementById("navbar")
let navListItems = document.querySelectorAll(".navlist");

clickNav.addEventListener("click", () => {
    oldNav.classList.toggle("active");
})

navListItems.forEach(item => {
    item.addEventListener("click", () => {
        oldNav.classList.remove("active");
    })
})

// let inputField = document.getElementById("inputField");

let nameInput = document.querySelector("form :nth-child(1)");
let emailInput = document.querySelector("form :nth-child(2)");
let messageInput = document.querySelector("form :nth-child(3)");

let namePlace = nameInput.getAttribute("placeholder");
let emailPlace = emailInput.getAttribute("placeholder");
let messagePlace = messageInput.getAttribute("placeholder");


let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", check);

function check(e) {
    if (nameInput.value === "" || nameInput.value === null) {
        e.preventDefault();
    }
    if (messageInput.value === "" || messageInput.value === null) {
        e.preventDefault();
    }
    nameInput.value === ""
    messageInput.value === ""
}




nameInput.onfocus = function () {
    nameInput.setAttribute("placeholder", "");
}
nameInput.onblur = function () {
    nameInput.setAttribute("placeholder", namePlace);
}
//---------------
emailInput.onfocus = function () {
    emailInput.setAttribute("placeholder", "");
}
emailInput.onblur = function () {
    emailInput.setAttribute("placeholder", emailPlace);
}
//-------------------
messageInput.onfocus = function () {
    messageInput.setAttribute("placeholder", "");

}
messageInput.onblur = function () {
    messageInput.setAttribute("placeholder", messagePlace);
}

let gitBtn = document.querySelectorAll(".gitHubBtn");

gitBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log(btn.parentElement);
    })
})


let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
})




