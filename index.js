// Your code goes here
document.addEventListener('DOMContentLoaded', function() {
   
    const textParagraph = document.getElementById('text');
    if (textParagraph) {
        textParagraph.textContent = 'This is really cool!';
    } else {
        console.error('Paragraph element with id "text" not found.');
    }
});