let features = document.getElementById("features");
let featuresBox = document.getElementById("featuresBox");

let companyBox = document.getElementById("companyBox")
let company = document.getElementById("company");

 features.addEventListener("click", function () {
     featuresBox.classList.toggle("lol");
 })

company.addEventListener("click", function () {
    companyBox.classList.toggle("comp")
})

let bars = document.querySelectorAll(".bar");
let hamburger = document.querySelector(".hamburgers");
let mainContainer = document.getElementById("mainContainer");
let blackContainer = document.getElementById("blackContainer");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mainContainer.classList.toggle("popUp");
    blackContainer.classList.toggle("pop");

})





// bars.forEach(bar => {
//     bar.addEventListener("click", function () {
//         bars.forEach(bar => bar.classList.toggle("active"));
//     })
// })










// window.onclick = function (event) {
//      if (!event.target.matches("#features")) {
//              if(featuresBox.classList.contains("lol")) {
//                  featuresBox.classList.remove("lol");
//      }
//  }
// }
// window.onclick = function (event) {
//      if (!event.target.matches("#company")) {
//              if(companyBox.classList.contains("comp")) {
//                  companyBox.classList.remove("comp");
//      }
//  }
// }

    
    
    //         // var dropDowns = document.getElementsByClassName("content");
    //         // var i;
    //         // for (i = 0; i<dropDowns.length; i++) {
    //         //     var openDropdown = dropDowns[i];
    //         //     if (openDropdown.classList.contains("lol")) {
    //         //         openDropdown.classList.remove("lol");
    //         //     }
    //         // }
    //     }
    // }