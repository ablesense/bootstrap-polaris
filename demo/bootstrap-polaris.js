/* This javascript isn't meant for production
 * rather examples of how to extend functionality of components
 */

(function () {
  /* 
   * Add/Subtract functionality for quantity selectors
   */
  let quantitySelectors = document.querySelectorAll('.quantity-selector');

  quantitySelectors.forEach(function (selector) {
    let input = selector.querySelector('.quantity-selector__input');
    let add = selector.querySelector('.quantity-selector__add');
    let subtract = selector.querySelector('.quantity-selector__subtract');

    let min = +input.getAttribute('min') || 0;
    let max = +input.getAttribute('max') || Infinity;

    add.addEventListener('click', function () {
      input.value = (+input.value < max) ? +input.value + 1 : max;
    });
    subtract.addEventListener('click', function () {
      input.value = (+input.value > min) ? input.value - 1 : min;
    });
  });

  document.getElementById('toastButton').addEventListener('click', function(e) {
    var showText = "Show Toast"
    var hideText = "Hide Toast"

    var toast = document.getElementById('sampleToast');
    
    if (e.target.innerHTML == showText) {
      e.target.innerHTML = hideText;
      toast.classList.add('show');
    } else {
      e.target.innerHTML = showText;
      toast.classList.remove('show');
    }
  });

  document.querySelector('#sampleToast button').addEventListener('click', function(e) {
    document.getElementById('toastButton').click();
  });

})();
