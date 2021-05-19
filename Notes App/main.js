
let addNoteBtn = document.querySelector('.addNote');
let textAreaDiv = document.querySelector('.textArea');
//let noteTextDiv = document.querySelector('.noteText');

// If The localStorage has already items then it will be getted into lcArray.If Not Then It Will Create the lcArray.
if (localStorage.getItem('notesArray') === null) {
  var lcArray = [];
} else {
  var lcArray = JSON.parse(localStorage.getItem('notesArray'));
  showNotes();
}

// Event Listener on click 
addNoteBtn.addEventListener('click', addNoteToLC);

// Here We Are Setting the notes to local Storage
function addNoteToLC(arg) {
  let data = new Date();
let realTime = data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();
localStorage.setItem('date',realTime);
let realTime1 = localStorage.getItem('date');

  let textInsideTextAreaDiv = textAreaDiv.value;
  lcArray.push(textInsideTextAreaDiv);
    localStorage.setItem('notesArray', JSON.stringify(lcArray));
    //console.log(lcArray);
  textAreaDiv.value = '';  
    showNotes();
}
//localStorage set item done....

function showNotes() {
  let arrayFromLC = JSON.parse(localStorage.getItem('notesArray'));
 let innerHTML = '';
  arrayFromLC.forEach(i => {
    innerHTML +=  `<div class="card border-dark mx-2 mb-3 my-2" style="display:inline-block;max-width:18rem;"><div class="card-header">Header</div><div class="content card-body text-dark"><p class="noteText card-text"> ${i} : ${realTime1} </p></div></div> `;
   });
 let theDiv = document.querySelector('.div');
 theDiv.innerHTML = innerHTML;
};
// End

// search Functionality 
let searchIpt = document.querySelector('.search');
searchIpt.addEventListener('keyup',searchNote);

function searchNote(e) {
 // console.log(this.value);
  let keyword = this.value;
  
/* function find(keyword) {
  let noteContent = document.querySelectorAll('.card-text');
noteContent.forEach(i=>{console.log('er',i.innerText.includes(keyword));});
  //noteContent.includes(keyword);
    //console.log('jhgc');
 }
  find(keyword);*/
}