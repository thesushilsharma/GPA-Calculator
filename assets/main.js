// function findTotal(){
//     var arr = document.getElementsByName('course');
//     var result=0;
//     for(var i=0;i<arr.length;i++){
//         if(parseInt(arr[i].value))
//             result += parseInt(arr[i].value);
//     }
//     document.getElementById('total').value = result;
// }

function clearScreen(){

    document.getElementById('total').value = ''

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
    '<tr class="dark:bg-slate-900">'+
    '<td><label for="subject_' + cnt + '" class="sr-only"></label><input type="text" class="subject" id="subject_' + cnt + '"><span class="validate_subject">&nbsp;</span></td>' +
    '<td><label for="credit_' + cnt + '" class="sr-only"></label><input type="text" class="credit" id="credit_' + cnt + '"><span class="validate_credit">&nbsp;</span></td>' +
    '<td><label for="mark_' + cnt + '" class="sr-only"></label><input type="text" class="mark" id="mark_' + cnt + '"><span class="validate_mark">&nbsp;</span></td>' +
    '</tr>';
    parent.insertAdjacentHTML('beforeend', newChild);
  }