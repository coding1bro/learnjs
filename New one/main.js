document.querySelector('.textArea').addEventListener('keyup', runCount);

function runCount(e) {
let shakeEle =document.querySelector('.counter');
let span = document.querySelector('span').style;
let number = e.target.innerText.length;
document.querySelector('span').innerText =number;

 if (number > 100) {
    shakeEle.style.animation = 'none';
    shakeEle.classList.add('shake');
    span.background = 'red';
    shakeEle.offsetHeight; /* trigger reflow */
    shakeEle.style.animation = null;

    /*shakeEle.style.webkitAnimation = '';
    setTimeout((e) => { shakeEle.style.webkitAnimation = 'none'; }, 200);*/
  }
  else {
    span.background = '#000';
  }
}
