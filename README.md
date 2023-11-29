![preview](https://i.giphy.com/media/V8NygaIdTM8mi8XuTL/source.gif)
# Typewriter.js
Simple typewriter animation using CSS and JS

## HTML:
```
<h1 class="animated">Hello World!</h1>
```
## CSS:
```
.animated {
    animation: blink-caret 1s ease-in-out;
}

.animated::after {
    content: "|";
    display: inline-block;
    animation: blink-caret 0.75s infinite;
    visibility: hidden;
}

.typing::after {
    visibility: visible;
}

@keyframes blink-caret {
    50% {
        border-color: transparent;
    }
}
```
## JS:
```
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
```
