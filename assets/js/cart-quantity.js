document.addEventListener('DOMContentLoaded', () => {
  const quantityInputs = document.querySelectorAll('input[name$="[quantity]"]');

  quantityInputs.forEach((input) => {

    input.addEventListener('keyup', (event) => {
      const value = parseInt(event.target.value);

      if (value % 10 !== 0) {
        event.target.value = Math.ceil(value / 10) * 10;
      }

      if (parseInt(event.target.value) === 70) {
        alert('Great choice!');
      }
    });
  });
});
