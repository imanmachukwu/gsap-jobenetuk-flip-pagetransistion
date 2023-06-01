// Introduce necessary variables
let h1Title = new SplitType("#h1-txt");
let Nav = new SplitType("li");

//Register plugin for GSAP to recognize it
gsap.registerPlugin(Observer);

//GSAP Animation
function gsapAnimate() {
    gsap.to(".char", {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: .05,
        ease: "expo.inOut",
        })
}

//Play animation on page load
gsapAnimate();

//Animate CSS properties
function reAnimate() {
    gsap.fromTo(".char", {
        y: 100,
        duration: .5,
        opacity: 0,
    }, {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: .05,
        ease: "expo.inOut",
        opacity: 1,
    })
}

//Animate Image out and in
let image = document.getElementById("imgg");
let imageIndex = 0;
let imageList = [
    "src/images/iPhone 14 Pro Max medium shot.png",
    "src/images/iPhone 14 Pro Max.png",
    "src/images/iPhone 14 Pro Max 2.png",
    "src/images/iPhone 14 Pro Max 3.png",
    "src/images/iPhone 14 Pro Max 4.png",
    "src/images/iPhone 14 Pro Max close shot.png"];

function moveOutImage() {
    function moveInImage() {
        //Increments the Image Index then restarts when it gets to the highest
        imageIndex = (imageIndex + 1) % imageList.length;
        console.log("Increased the index");

        //Created a variable that selects the next image in the array
        let imagePath = imageList[imageIndex];
        console.log("Set the new variable to the next image");

        image.src = imagePath;
        gsap.to(image, {
            y: 0,
            opacity: 1,
            duration: .5,
        })
    };

    gsap.to(image, {
        y: 50,
        opacity: 0,
        duration: .5,
        onComplete: moveInImage,
    })
}

//Play animation on user touch, scroll or click
Observer.create({
    target: window,
    type: "wheel, touch, pointer",
    onClick: () => {
        console.log("Observer saw that click!");
        gsapAnimate();
        reAnimate();
        moveOutImage()},
    onUp: () => {
        console.log("Observer saw that upward scroll");
        gsapAnimate();
        reAnimate();
        moveOutImage()},
    onDown: () => {
        console.log("Observer saw that downward scroll");
        gsapAnimate();
        reAnimate();
        moveOutImage()}
})