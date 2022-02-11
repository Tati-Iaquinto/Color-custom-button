/*https://jsfiddle.net/3fehj/*/

let colorInput = document.getElementById('favcolor');

function hexToRgb(hex) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? 
    `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`
   : null;
}

colorInput.addEventListener('input', function(){
  document.getElementById('hex').innerHTML = colorInput.value;
  document.getElementById('rgb').innerHTML = hexToRgb(colorInput.value);
  document.querySelector('#color-changing-text').style.color = colorInput.value
  
}, false);

const colorChangingText = document.querySelector('#color-changing-text');

