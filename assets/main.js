function findTotal(){
    var arr = document.getElementsByName('course');
    var result=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            result += parseInt(arr[i].value);
    }
    document.getElementById('total').value = result;
}

function clearScreen(){

    document.getElementById('total').value = ''

}