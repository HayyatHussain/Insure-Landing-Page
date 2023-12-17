// Get the DOM elements
const toggle1 = document.getElementById("hi-1"),
toggle2 = document.getElementById("hi-2"),
sidenav = document.getElementById("side-nav");

// Add a float-like effect on the main intro image (desktop) using GSAP
gsap.from(".sec-1 img", {
    y: -15,
    duration: 1.8,
    yoyo: "true",
    repeat: -1
})

// Add a float-like effect on the button (about-work section) using GSAP
gsap.from(".work-txt p", {
    x: 30,
    duration: 4,
    yoyo: "true",
    repeat: -1
})


// Run a function to make the side navigation panel visible to the user and change the buttons

function toggle () {
    // Hide the (three bars) navigation button
    toggle1.style.display = 'none';

    // Display the (X-sign) navigation button
    toggle2.style.display = 'block';
    
    // Animate the button alternation
    gsap.from(toggle2, {
        y: -250,
        duration: 0.2
    })

    // Animate the side navigation panel (while expanding it)
    gsap.to(sidenav, {
        height: 531,
        duration: 1
    })

}

// Run a function to make the side navigation panel invisible to the user and change the buttons

function toggle01 () {
    // Display the (three-dots) navigation button
    toggle1.style.display = 'block';

    // Hide the (X-sign) navigation button
    toggle2.style.display = 'none';


    // Animate the button alternation
    gsap.from(toggle1, {
        y: -250,
        duration: 0.2
    })

    // Animate the side navigation panel (while closing it)
    gsap.to(sidenav, {
        height: 0,
        duration: 1
    })
}

// Execute the two functions on alternating clicks
toggle1.addEventListener('click', toggle);
toggle2.addEventListener('click', toggle01);
