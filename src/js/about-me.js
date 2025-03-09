import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordionParams = {
openOnInit: [0],  // Перший елемент відкривається за замовчуванням
 closeOthers: true,  // Закриває інші елементи при відкритті нового
 duration: 300,  // Тривалість анімації
 toggle: 'click',  // Клік як тригер
 easing: 'ease-in-out',  // Плавна анімація
scrollTo: true,  // Прокручує до відкритого елемента
 scrollOffset: 20,  // Відстань при прокручуванні
  
    // elementClass: '.ac',
//     triggerClass: ".content-arrow",
//     panelClass: '.content-item-copy',
//     activeClass: 'is-active', 
}

 new Accordion(".content-container", accordionParams);

//!-----------------------------------------------------------