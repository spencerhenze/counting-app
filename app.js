
function showNumbers() {
    var userEntry = document.getElementById('userNumber').value;
    var output = '';
    for(var i = 0; i <= userEntry; i++) {
        output += i;
        if (i != userEntry) {
            output += ', '
        }
    }
    document.getElementById('result').innerHTML = output;
}