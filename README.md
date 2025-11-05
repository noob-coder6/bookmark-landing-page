# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly


### Links

- Solution URL: [Solution URL](https://github.com/noob-coder6/bookmark-landing-page.git)
- Live Site URL: [Live site URL](https://noob-coder6.github.io/bookmark-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript
- Event delegation pattern
- CSS transitions and animations

### What I learned

This project helped me understand several key web development concepts:

**Event Delegation**: Instead of adding event listeners to multiple elements, I learned to listen to parent containers and use `closest()` to identify the target element.

```js
tabsContainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.features__tab-btn');
  if (!clicked) return;
  // Handle tab switching
});
```

**Accordion Animation**: I discovered how to smoothly animate height changes using `maxHeight` and `scrollHeight`:

```js
if (!isExpanded) {
  answer.style.maxHeight = answer.scrollHeight + 'px';
} else {
  answer.style.maxHeight = null;
}
```

**Form Validation with Regex**: I implemented email validation using regular expressions:

```js
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  contactForm.classList.add('error');
}
```

**Mobile Navigation**: Creating a full-screen mobile menu with toggle functionality and preventing body scroll when the menu is open.

### Continued development

Areas I want to focus on in future projects:

- Advanced CSS animations and micro-interactions
- Accessibility improvements (keyboard navigation, screen reader support)
- JavaScript performance optimization
- Progressive enhancement techniques
- More complex form validation patterns

## Author

- Frontend Mentor - [@noob-coder6](https://www.frontendmentor.io/profile/noob-coder6)
- GITHUB - [noob-coder6](https://github.com/noob-coder6)