document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.createElement('h1');
    greetingElement.textContent = 'Welcome to My Website!';
    document.body.appendChild(greetingElement);

    const button = document.createElement('button');
    button.textContent = 'Click Me!';
    button.addEventListener('click', () => {
        alert('Button was clicked!');
    });
    document.body.appendChild(button);
});