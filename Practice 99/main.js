document.addEventListener('DOMContentLoaded', randomClr());

function randomClr() {
  let letterAndNum = "ABCDEF1234567890";
  let hexVal = '#';

  function hex(hexNum) {
    for (var i = 0; i < hexNum; i++) {
      let val = letterAndNum.charAt(Math.floor(
        Math.random() * 10 + 1));
      hexVal += val;
    }
  }
  hex(6);
  document.querySelector('#bghex').style.backgroundColor = hexVal;
  document.querySelector('#sixVal').innerText = hexVal;
}