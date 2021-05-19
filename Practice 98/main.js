let que1 = 'Who Is The Current Prime Minister Of India ?';
let que2 = 'Which Of This Is Indian Cricket Opener ?';
let que3 = 'Which Country Is Called As Country Of Sunrise ?';
let que4 = 'How Many Double Hundreds Are Scored By Rohit Sharma In ODI cricket ?';
let que5 = 'Which Is Longest River In The World ?';

let opt1 = ['Narendra Modi', 'Rahul Gandhi', 'Manmohan Singh', 'Rajendra Prasad'];
let opt2 = ['Virat Kohli', 'Jasprit Bhumrah', 'Rohit Sharma', 'Shreyash Ayyar'];
let opt3 = ['USA', 'Japan', 'Germany', 'Netherland'];
let opt4 = ['2', '4', '5', '3'];
let opt5 = ['Amazon', 'Nile', 'Ganga', 'Yang-tse'];

let ans = [opt1, opt2, opt3, opt4, opt5];
let arr = [que1, que2, que3, que4, que5];
let realans = [1, 3, 2, 4, 2];
console.log(arr);
let queNum = 1;

// ←↑----This Is Our Data----↑→

// When The Content loaded then It will call function 'run()'.
document.addEventListener('DOMContentLoaded', clearstg)
document.addEventListener('DOMContentLoaded', run)

function clearstg() {
  localStorage.clear();
}
// When You Have Selected Your Option it will run and save to Local storage.(arg) is option

function saveit(arg) {
  console.log('Runned', arg);
  let data1 = localStorage.setItem(arr[0], arg);
}
//----------1️⃣ E N D -------------

//2️⃣ When Clicked On Save And Next The 'run()' function will run ↓


function run(arg) {

  if (arr.length == 0) {
    document.querySelector('.txt').innerHTML = ` “ Thanks for Submissions ” <br> Check Your Result Below !`;
   document.querySelector('.txt').style.cssText='text-align:center; line-height:30px;';
    
    document.querySelector('.num').innerText = '';
    document.querySelector('.footer_1').innerText = 'Attempted All Que.';
    localStorage.clear;
    let del = document.querySelectorAll('.opt');
    del.forEach(item => { item.style.visibility = 'hidden' });
    return false;
  }
  
  document.querySelector('.txt').innerText = arr[0];
  document.querySelector('.opt1').innerText = ans[0][0];
  document.querySelector('.opt2').innerText = ans[0][1];
  document.querySelector('.opt3').innerText = ans[0][2];
  document.querySelector('.opt4').innerText = ans[0][3];
}

function showque(arg) {
  if (arr.length == 0) {
    return false;
  }

  let checkit = localStorage.getItem(arr[0]);

  function rwc(bgclr, RorW) {
    document.querySelector(`.rw${queNum}`).style.backgroundColor = bgclr;
    document.querySelector(`.rw${queNum}`).innerText = RorW;

  }

  console.log(checkit);
  if (checkit == realans[0]) {
    console.log('log');
    rwc('#9ECFB0', '✔');
  }
  else if (checkit == null) {
    console.log('Didnt Answered');
    rwc('', '➖');
  }
  else {
    console.log('Wring Answer');
    rwc('#FFC9C9', '✖');
  }

  arr.splice(0, 1);
  console.log(arr);
  realans.splice(0, 1);

  queNum += 1;
  document.querySelector('.num').innerText = queNum + '.';
  document.querySelector('.foonum').innerText = queNum;

  ans.splice(0, 1);
}

let btnclk = document.querySelector('.footer_2');
btnclk.addEventListener('click', showque);

let button = document.querySelector('.footer_2');
button.addEventListener('click', run);


