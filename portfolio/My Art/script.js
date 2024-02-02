function typeWriter(element, text, speed) {
    element.innerHTML = '';
    let i = 0;

    function typeCharacter() {
        element.innerHTML += text.charAt(i);
        i++;

        if (i < text.length) {
            setTimeout(typeCharacter, speed);
        }
    }

    typeCharacter();
}

// Simulate typing for the title and description
const titleContainer = document.getElementById('title-container');
const descriptionContainer = document.getElementById('description-container');

const titleText = "My Paintings...";
const descriptionText = "I have had a passion for art and painting since I was really young. " +
    "I only recently started to paint again and I fell in love with Arabic calligraphy. " +
    "Here are some paintings that I made for friends and family.";

typeWriter(titleContainer, titleText, 100);
setTimeout(() => typeWriter(descriptionContainer, descriptionText, 50), titleText.length * 100);
