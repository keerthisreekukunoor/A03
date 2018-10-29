
var resultField = document.querySelector('#result');
var form = document.querySelector('#Percentage').addEventListener('submit', calculatePerentage(number1, number2));

function calculatePerentage(number1, number2) {
    var numField1 = parseInt(number1)
    var numField2 = parseInt(number2)
    if (!numField1.value || !numField2.value) {
        alert("Please enter values in the fields");
    }
    else {
        var val1 = parseFloat(numField1.value);
        var val2 = parseFloat(numField2.value);

        var res = val1 / val2;
        var percent = res * 100;

        resultField.innerText = "Answer: " + percent + "%";
        event.preventDefault();
    }
    return percent;
}