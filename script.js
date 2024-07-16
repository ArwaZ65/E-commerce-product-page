function increase() {
    // Get the current count from the span element
    var countElement = document.getElementById('numproduct');
    var currentCount = parseInt(countElement.innerText);

    // Increase the count by 1
    var newCount = currentCount + 1;

    // Update the span element with the new count
    countElement.innerText = newCount;
}
function decrease() {
    // Get the current count from the span element
    var countElement = document.getElementById('numproduct');
    var currentCount = parseInt(countElement.innerText);

    // Increase the count by 1
    var newCount = currentCount > 0 ? currentCount - 1 : 0;

    // Update the span element with the new count
    countElement.innerText = newCount;
}

function Imagedisplay(imageElement) {
    // Get the source and alt attributes of the clicked image
    var imageSrc = imageElement.src;
    var imageAlt = imageElement.alt;

    // Get the display div element
    var displayDiv = document.getElementById('displayimg');

    // Create a new image element
    var Imagedisplay = document.createElement('img');
    Imagedisplay.src = imageSrc;
    Imagedisplay.alt = imageAlt;

    // Clear any existing content in the display div
    displayDiv.innerHTML = '';

    // Append the new image to the display div
    displayDiv.appendChild(Imagedisplay);
}
// function visiblecart() {
//     var displayDiv = document.getElementById('displaycart');
//     if (displayDiv.style.visibility === 'hidden' || displayDiv.style.visibility === '') {
//         displayDiv.style.visibility = 'visible';
//     } else {
//         displayDiv.style.visibility = 'hidden';
//     }

// }
function toggleMenu() {
    const navLinks = document.getElementById('links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}