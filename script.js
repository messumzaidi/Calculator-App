document.addEventListener('DOMContentLoaded', function() {
    let result = document.getElementById('result');
    let buttons = document.querySelectorAll('.keypad button');
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        if (this.textContent === '=') {
          result.value = eval(result.value);
        } else if (this.textContent === 'C') {
          result.value = '';
        } else {
          result.value += this.textContent;
        }
      });
    });
  });
  