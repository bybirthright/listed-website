document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isActive = question.classList.contains('active');

        // Close all other open questions
        document.querySelectorAll('.faq-question.active').forEach(activeQuestion => {
            if (activeQuestion !== question) {
                activeQuestion.classList.remove('active');
                activeQuestion.nextElementSibling.classList.remove('active');
            }
        });

        // Toggle the clicked question
        question.classList.toggle('active');
        answer.classList.toggle('active');

        // Adjust max-height for smooth animation
        if (!isActive) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = null;
        }
    });
});