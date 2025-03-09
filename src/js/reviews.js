import { fetchReviews } from './portfolio-api.js';
import Swiper from 'swiper';
import 'swiper/css/navigation';

function renderReviews(reviews) {
  let reviewsHtml = '';
  for (let review of reviews) {
    const { avatar_url, author, review: reviewText } = review;
    let reviewHtml = `<li><img src="${avatar_url}" alt="${author}">
                <h3>${author}</h3>
                <p>${reviewText}</p></li>`;
    reviewsHtml += reviewHtml;
  }
  document.getElementById('reviews-list').innerHTML = reviewsHtml;
  console.log(reviewsHtml);
  console.log(reviews);
}

let data = await fetchReviews();
renderReviews(data);

// import axios from 'axios';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// let reviewsSwiper;

// async function fetchReviews() {
//   try {
//     const { data } = await axios.get(
//       'https://portfolio-js.b.goit.study/api/reviews'
//     );

//     if (!data.length) throw new Error('No reviews found');

//     renderReviews(data);
//   } catch (error) {
//     iziToast.error({
//       title: 'Error',
//       message: error.message,
//       position: 'topRight',
//     });

//     const errorMessage = document.getElementById('error-message');
//     if (errorMessage) errorMessage.classList.remove('visually-hidden');
//   }
// }

// function renderReviews(reviews) {
//   const reviewsList = document.getElementById('reviews-list');

//   if (!reviewsList) {
//     console.error('Element #reviews-list not found!');
//     return;
//   }

//   reviewsList.innerHTML = reviews
//     .map(
//       review => `
//         <li class="swiper-slide">
//             <img src="${review.avatarUrl}" alt="${review.author}" width="50">
//             <h3>${review.author}</h3>
//             <p>${review.review}</p>
//         </li>
//     `
//     )
//     .join('');

//   initSwiper();
// }

// function initSwiper() {
//   if (reviewsSwiper) reviewsSwiper.destroy(true, true); // Запобігаємо дублюванню Swiper

//   reviewsSwiper = new Swiper('.swiper', {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     navigation: {
//       nextEl: '.reviews .swiper-button-next',
//       prevEl: '.reviews .swiper-button-prev',
//     },
//     keyboard: {
//       enabled: true,
//       onlyInViewport: false,
//     },
//     breakpoints: {
//       768: { slidesPerView: 2 },
//       1440: { slidesPerView: 4 },
//     },
//   });
// }

// document.addEventListener('DOMContentLoaded', () => {
//   fetchReviews();
// });

// import axios from 'axios';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// async function fetchReviews() {
//   try {
//     const { data } = await axios.get(
//       'https://portfolio-js.b.goit.study/api/reviews'
//     );

//     if (!data.length) throw new Error('No reviews found');

//     renderReviews(data);
//   } catch (error) {
//     iziToast.error({
//       title: 'Error',
//       message: error.message,
//       position: 'topRight',
//     });

//     document
//       .getElementById('error-message')
//       .classList.remove('visually-hidden');
//   }
// }

// function renderReviews(reviews) {
//   const reviewsList = document.getElementById('reviews-list');
//   reviewsList.innerHTML = reviews
//     .map(
//       review => `
//         <li class="swiper-slide">
//             <img src="${review.avatarUrl}" alt="${review.author}" width="50">
//             <h3>${review.author}</h3>
//             <p>${review.review}</p>
//         </li>
//     `
//     )
//     .join('');

//   initSwiper();
// }

// function initSwiper() {
//   new Swiper('.swiper', {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     keyboard: {
//       enabled: true,
//       onlyInViewport: false,
//     },
//     breakpoints: {
//       768: { slidesPerView: 2 },
//       1440: { slidesPerView: 4 },
//     },
//   });
// }

// fetchReviews();
