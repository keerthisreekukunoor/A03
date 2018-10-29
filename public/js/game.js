$("#value1").click(function(){
var numField1 = $("#numField1").value ?  parseFloat(numField1.value) : numField1
var numField2 =  $("#numField2").value ?  parseFloat(numField2.value) : numField2
var resultField = document.querySelector('#resultField');
//percalculator(numField1, numField2);
// var form = document.querySelector('#xIsWhatPercentOfY').addEventListener('submit', function (event)
// {

percalculator(numField1,numField2)
});

function percalculator(numField1, numField2)
{
    var percent = 0
    // if (!numField1.value || !numField2.value) {
    //     alert("Please enter values in the fields");
    // }
    // else {
        //var x = parseFloat(numField1.value);
        //var y = parseFloat(numField2.value);

        var result = numField1 / numField2;
        percent = result * 100;
        console.log(percent)
        if($("#resultField"))
        {
        //resultField.innerText = "Answer: " + percent + "%";
        $("#resultField").html(percent)
        //event.preventDefault();
        }
    // }
    console.log(percent)
    return percent
}
// });