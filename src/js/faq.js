import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const accordion = new Accordion('.faq-item', {
    elementClass: 'faq-item',
    triggerClass: 'faq-question',
    panelClass: 'faq-answer',
    activeClass: 'open',
    duration: 300,
    multiple: false,
    showFirstPanel: false,
  });
});
