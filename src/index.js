
window.onload = function() {

    document.addEventListener("mousemove", parallax);
    const bigCircle = document.querySelector(".big-circle");
    const img = document.querySelector(".benjamin-image");
    const littleCircle = document.querySelector(".little-circle");

    function parallax(e) {

        let width = window.innerWidth
        let x = (e.clientX - (width/2));

        bigCircle.style.transform = `translate3d(${x/50}px, 0, 0)`;
        img.style.transform = `translate3d(${-x/20}px, 0, 0)`;
        littleCircle.style.transform = `translate3d(${-x/30}px, 0, 0)`;
    }

};