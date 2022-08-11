let controls = document.querySelectorAll(".control");

controls.forEach(control => {
    control.addEventListener("click", function () {
        controls.forEach(control => control.classList.remove("active"));
        this.classList.add("active");
    })
})

let hamburger = document.querySelector(".hamburger");
let realNav = document.getElementById("realNav");
let bars = document.querySelectorAll(".bar");

hamburger.addEventListener("click", function () {
    realNav.classList.toggle("sliding");
    
})
// My own example I did

// hamburger.addEventListener("click", function() {
//     bars.forEach(bar => {
//         bar.classList.toggle("lol");
//     })
// })
hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("lol");
    })


controls.forEach(control => {
    control.addEventListener("click", () => {
        realNav.classList.toggle("sliding");
        bars.forEach(bar => {
            hamburger.classList.toggle("lol");

        })
    })
})


