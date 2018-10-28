var numField1 = document.querySelector('#numField1');
var numField2 = document.querySelector('#numField2');
var resultField = document.querySelector('#resultField');
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