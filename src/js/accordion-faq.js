let openFAQ = document.querySelectorAll('.question-items');

for (let i = 0; i < openFAQ.length; i++) {
    openFAQ[i].addEventListener('click', function () {
        this.classList.toggle('active-accordion');
    });
}