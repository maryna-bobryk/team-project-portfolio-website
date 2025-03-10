import iziToast from 'izitoast';
import 'iziToast/dist/css/iziToast.min.css';


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const emailInput = document.getElementById("email");
    const commentsInput = document.getElementById("comments");
    const sendButton = document.querySelector(".footer-send-btn");
    const modalOverlay = document.querySelector(".modal-overlay");
    const modalClose = document.querySelector(".modal-close");
    const modalTitle = document.querySelector(".modal-title");
    const modalMessage = document.querySelector(".modal-description");

    // ✅ Open modal with dynamic content
    function openModal(title, message) {
        modalTitle.textContent = title;
        modalMessage.textContent = message;
        modalOverlay.classList.add("is-open");
        document.body.style.overflow = "hidden"; // Disable scrolling
    }

    // ✅ Close modal window
    function closeModal() {
        modalOverlay.classList.remove("is-open");
        document.body.style.overflow = ""; // Enable scrolling
    }

    // Close modal by clicking on the close button
    modalClose.addEventListener("click", closeModal);

    // Close modal by clicking on the backdrop (outside the modal)
    modalOverlay.addEventListener("click", function (event) {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });

    // Close modal by pressing Escape key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });

    // ✅ Truncate long input text
    function truncateInput(inputElement, maxLength) {
        if (inputElement.value.length > maxLength) {
            inputElement.value = inputElement.value.substring(0, maxLength) + "...";
        }
    }

    commentsInput.addEventListener("input", function () {
        truncateInput(commentsInput, 100); // Truncate if more than 100 characters
    });

    // ✅ Submit form by clicking the "Send" button
    sendButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default form submission

        const email = emailInput.value.trim();
        const comments = commentsInput.value.trim();

        // Email validation
        const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!emailPattern.test(email)) {
            iziToast.error({
                title: 'Error',
                message: 'Please enter a valid email address!',
                position: 'topRight'
            });
            return;
        }

        if (comments.length === 0) {
            iziToast.error({
                title: 'Error',
                message: 'The comments field cannot be empty!',
                position: 'topRight'
            });
            return;
        }

        fetch("https://portfolio-js.b.goit.study/api/requests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, comment: comments }), // We use `message` instead of `comments`
        })
        .then((response) => response.json())
        .then((data) => {
            // Success response from the server
            openModal(data.title, data.message); // Show modal with the server response
            form.reset(); // Clear the form

            iziToast.success({
                title: 'Success',
                message: 'Your request has been sent successfully!',
                position: 'topRight'
            });
        })
        .catch((error) => {
            iziToast.error({
                title: 'Error',
                message: 'An error occurred, please try again!',
                position: 'topRight'
            });
            console.error("Error:", error);
        });
    });
});
