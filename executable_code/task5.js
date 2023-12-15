window.onload = function() {
    var m=21; 
    var t=6000;
    var to=new Array(m+1);
    var id=m;

to[0]="http://nbrb.by/";
to[1]="https://mui.com/";
to[2]="http://microsoft.com";
to[3]="http://oracle.com";
to[4]="https://www.w3schools.com/js/js_output.asp";
to[5]="https://www.w3schools.com/js/js_statements.asp";
to[6]="https://www.w3schools.com/js/js_syntax.asp";
to[7]="https://www.w3schools.com/js/js_comments.asp";
to[8]="https://www.w3schools.com/js/js_variables.asp";
to[9]="https://www.w3schools.com/js/js_let.asp";
to[10]="https://www.w3schools.com/js/js_operators.asp";
to[12]="https://getbootstrap.com/docs/4.0/layout/grid/";
to[13]="https://www.w3schools.com/bootstrap4/bootstrap_grid_system.asp";
to[14]="https://www.cfainstitute.org/en/programs/cfa";
to[15]="https://ru.legacy.reactjs.org/";
to[16]="https://vuejs.org/";
to[17]="https://nodejs.org/en/learn";
to[18]="https://mantine.dev/";
to[19]="https://www.bloomberg.com/energy";
to[20]="https://www.merrill.com/";
to[21]="https://www.jpmorgan.com/global";

var startButtonElement = document.getElementById('startButton');
var newWindow;
if (startButtonElement) {
startButtonElement.addEventListener('click', () => {
  newWindow = window.open("", "_blank");
  setInterval(count, 4000);
});
}

let counter = 0;

function count() {
var counterElement = document.getElementById('counter');
if (counterElement) {
  counterElement.textContent = counter;
}
if (newWindow) {
  newWindow.location = to[counter];
}
counter++;
if (counter==to.length) counter=0;
document.getElementById('urls').innerHTML += to[counter] + '<br>';
}
}
