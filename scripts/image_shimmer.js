const shimmers = document.querySelectorAll(".shimmer");
const anchor = document.getElementById("portrait");
const rect = anchor.getBoundingClientRect();
const anchorX = rect.left + rect.width / 2;
const anchorY = rect.top + rect.height / 2;
const transScale = 0.08;
const transDiff = 0.5;


document.addEventListener("mousemove", (e) =>{

    console.log(e);

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    shimmers.forEach((shimmer, index) => {

        shimmer.style.transform = "translate(" + String(((transDiff * (index + 1))) * transScale * (anchorX - mouseX)) + "px," + String((index + 1) * transScale * (anchorY - mouseY)) + "px)";
        shimmer.style.zIndex = String(-index);
        // portrait.style.filter = 'hue-rotate(' + String(Math.atan2(anchorX-mouseX, anchorY-mouseY)) + 'rad)';
    })
})

