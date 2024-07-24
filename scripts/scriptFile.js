
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.neon-button');
    const output = document.getElementById('output');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const text = this.getAttribute('data-text');
            output.innerHTML = text.replace(/\n/g, '<br>');
        });
    });
});