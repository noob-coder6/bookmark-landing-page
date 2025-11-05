document.addEventListener('DOMContentLoaded', () => {
  // --- MOBILE NAVIGATION ---
  const navToggle = document.querySelector('.nav__toggle');
  const navList = document.querySelector('.nav__list');
  const navToggleOpen = document.querySelector('.nav__toggle-img--open');
  const navToggleClose = document.querySelector('.nav__toggle-img--close');

  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    navList.classList.toggle('open');
    navToggleOpen.style.display = navList.classList.contains('open') ? 'none' : 'block';
    navToggleClose.style.display = navList.classList.contains('open') ? 'block' : 'none';
    document.body.style.overflow = navList.classList.contains('open') ? 'hidden' : '';
  });

  // --- FEATURES TABS ---
  const tabsContainer = document.querySelector('.features__tabs');
  const tabButtons = document.querySelectorAll('.features__tab-btn');
  const tabContents = document.querySelectorAll('.features__content');

  tabsContainer.addEventListener('click', (e) => {
    const clicked = e.target.closest('.features__tab-btn');
    if (!clicked) return;

    // Deactivate all
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Activate clicked
    clicked.classList.add('active');
    document.querySelector(`.features__content[data-content="${clicked.dataset.tab}"]`).classList.add('active');
  });

  // --- FAQ ACCORDION ---
  const accordion = document.querySelector('.faq__accordion');

  accordion.addEventListener('click', (e) => {
    const question = e.target.closest('.faq__question');
    if (!question) return;

    const item = question.parentElement;
    const answer = item.querySelector('.faq__answer');
    const isExpanded = question.getAttribute('aria-expanded') === 'true';

    // Close all other items
    const allItems = accordion.querySelectorAll('.faq__item');
    allItems.forEach(i => {
      if (i !== item) {
        i.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
        i.querySelector('.faq__answer').style.maxHeight = null;
      }
    });

    // Toggle current item
    question.setAttribute('aria-expanded', !isExpanded);
    if (!isExpanded) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = null;
    }
  });

  // --- CONTACT FORM VALIDATION ---
  const contactForm = document.querySelector('.contact__form');
  const emailInput = document.querySelector('.contact__input');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      contactForm.classList.add('error');
    } else {
      contactForm.classList.remove('error');
      // Here you would normally submit the form
      alert('Thank you for subscribing!');
      contactForm.classList.remove('error');
      emailInput.value = '';
    }
  });
});