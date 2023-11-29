setTimeout(() => {
    const textElement = document.querySelector('.animated');
    const textContent = textElement.textContent;
    textElement.textContent = '';
    textElement.classList.add('typing');

    let index = 0;

    const typingInterval = setInterval(() => {
        textElement.textContent += textContent[index];
        index++;

        if (index === textContent.length) {
            clearInterval(typingInterval);
            textElement.classList.remove('typing');
        }
    }, 150);
}, 100); // Interval after page loaded, 100 recommended