document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.querySelector('.contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Xabaringiz qabul qilindi. Tez orada javob beramiz!');
    contactForm.reset();
  });
});
