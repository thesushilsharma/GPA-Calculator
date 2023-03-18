// function findTotal(){
//     var arr = document.getElementsByName('course');
//     var result=0;
//     for(var i=0;i<arr.length;i++){
//         if(parseInt(arr[i].value))
//             result += parseInt(arr[i].value);
//     }
//     document.getElementById('total').value = result;
// }
var flag;

function calculator() {
  flag = true;

  var totalCredit = 0;
  var totalMark = 0;

  var subjects = document.querySelectorAll(".subject");
  var credits = document.querySelectorAll(".credit");
  var marks = document.querySelectorAll(".mark");

  var subject_validators = document.querySelectorAll(".validate_subject");
  var credit_validators = document.querySelectorAll(".validate_credit");
  var mark_validators = document.querySelectorAll(".validate_mark");

  for (var i = 0; i < credits.length; i++) {
    var subject = subjects[i].value;
    var credit = credits[i].value;
    var mark = marks[i].value;

    var subject_validator = subject_validators[i];
    var credit_validator = credit_validators[i];
    var mark_validator = mark_validators[i];

    var results = document.getElementById("results");
  }
}

function clearScreen() {

  document.getElementById("results").innerHTML = "";

}

function add_subject() {
  var parent = document.getElementById('wam_input');
  var cnt = 0;
  for (var i = 0; i < parent.childNodes.length; i++) {
    if (parent.childNodes[i].className == 'dark:bg-slate-900') {
      cnt++;
    }
  }
  var newChild =
    '<tr class="dark:bg-slate-900">' +
    '<td><label for="subject_' + cnt + '" class="sr-only"></label><input type="text" class="subject" id="subject_' + cnt + '"><span class="validate_subject">&nbsp;</span></td>' +
    '<td><label for="credit_' + cnt + '" class="sr-only"></label><input type="text" class="credit" id="credit_' + cnt + '"><span class="validate_credit">&nbsp;</span></td>' +
    '<td><label for="mark_' + cnt + '" class="sr-only"></label><input type="text" class="mark" id="mark_' + cnt + '"><span class="validate_mark">&nbsp;</span></td>' +
    '</tr>';
  parent.insertAdjacentHTML('beforeend', newChild);
}

// Add event listener to generate button
const generatewam = document.getElementById('generate-wam');
generatewam.addEventListener('click', calculator);