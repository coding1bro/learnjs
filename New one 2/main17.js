// ---Adding_HTML---
let h2 = document.createElement('h2');
let h2T = document.createTextNode('Editable Div');
h2.appendChild(h2T);

let div = document.createElement('div');
div.id = 'bro';
let divT = document.createTextNode(localStorage.getItem('innText')||'Write Your Text Here');
div.appendChild(divT);

let body = document.body;
body.appendChild(h2);
body.appendChild(div);
//-----------------------------------------
 let getDiv = document.querySelector('#bro');
getDiv.addEventListener('click', cedit);

function cedit(e) {
    console.log('done');
  getDiv.setAttribute('contenteditable', 'true');
};

getDiv.addEventListener('blur',saveit);
function saveit(arg) {
  let innText = getDiv.innerText;
  localStorage.setItem('innText',innText);
  getDiv.setAttribute('contenteditable', 'false');
}