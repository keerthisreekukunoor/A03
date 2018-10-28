var field1 = document.querySelector('#field1');
var field2 = document.querySelector('#field2');
var result = document.querySelector('#result');
var form = document.querySelector('#Percentage').addEventListener('submit', function (event) {
  if (!field1.value || !field2.value) 
  {
    alert("Please enter values in the fields");
  } 
  else {
    var val1 = parseFloat(field1.value);
    var val2 = parseFloat(field2.value);

    var res = val1 / val2;
    var percent = res * 100;

    resultField.innerText = "Answer: " + percent + "%";
    event.preventDefault();
  }
});