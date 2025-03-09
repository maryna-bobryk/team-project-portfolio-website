import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  if (typeof Accordion !== 'function') {
    console.error('Accordion library is not loaded.');
    return;
  }

  const faqAccordion = new Accordion('.faq-list', {
    duration: 400,
    showMultiple: false,
    elementClass: 'faq-item',
    triggerClass: 'faq-question',
    panelClass: 'faq-answer',
    activeClass: 'open',
    collapse: true,
  });

  document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', function () {
      const parent = this.closest('.faq-item');
      parent.classList.toggle('open');
      const answer = parent.querySelector('.faq-answer');
      if (parent.classList.contains('open')) {
        answer.style.display = 'block';
      } else {
        answer.style.display = 'none';
      }
    });
  });
});
