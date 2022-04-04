function plus(){
    let numberOne = +document.getElementById('numberOne').value
    let numberTwo = +document.getElementById('numberTwo').value  
    let result = numberOne + numberTwo;
    document.getElementById('result').innerHTML = result;
}
function minus(){
    let numberOne = +document.getElementById('numberOne').value
    let numberTwo = +document.getElementById('numberTwo').value  
    let result = numberOne - numberTwo;
    document.getElementById('result').innerHTML = result;
}
function multiplication(){
    let numberOne = +document.getElementById('numberOne').value
    let numberTwo = +document.getElementById('numberTwo').value  
    let result = numberOne * numberTwo;
    document.getElementById('result').innerHTML = result;
}

function division(){
    let numberOne = +document.getElementById('numberOne').value
    let numberTwo = +document.getElementById('numberTwo').value  
    let result = numberOne/numberTwo;
    document.getElementById('result').innerHTML = result;
}

function clean(){
    document.getElementById('numberOne').value = "";
    document.getElementById('numberTwo').value = "";
    document.getElementById('result').innerHTML = "";
}