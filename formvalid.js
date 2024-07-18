    $(document).ready(function(){
      var date_input=$('input[name="date"]'); //our date input has the name "date"
      var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
      var options={
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
      };
      date_input.datepicker(options);
    })


var name1;
var name2;
var Gender;
 function nameget(){
    name1 = document.getElementById("name").value;
    name2 = document.getElementById("name2").value;
    Gender = document.getElementById("gender").value;
    date = document.getElementById("date").value;
    ADDRESS = document.getElementById("ADDRESS").value;
    number = document.getElementById("number").value;
    number2 = document.getElementById("number2").value;
    console.log(name1);
    console.log(Gender);
    console.log(date);
    
    document.write("Firstname :"+ name1)
    document.write("Lastname :"+ name2)
    document.write("Gender :"+ Gender)
    document.write("date :"+ date)
    document.write("ADDRESS :"+ ADDRESS)
    document.write("number :"+ number)
    document.write("number2 :"+ number2)
 }