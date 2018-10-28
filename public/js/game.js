var numField1 = document.querySelector('#numField1');
var numField2 = document.querySelector('#numField2');
var resultField = document.querySelector('#resultField');
var form = document.querySelector('#xIsWhatPercentOfY').addEventListener('submit', function (event) {
  if (!numField1.value || !numField2.value) {
    alert("Please enter values in the fields");
  } else {
    var x = parseFloat(numField1.value);
    var y = parseFloat(numField2.value);

    var result = x / y;
    var percent = result * 100;

    resultField.innerText = "Answer: " + percent + "%";
    event.preventDefault();
  }
});