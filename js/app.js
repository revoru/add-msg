//get
var input = document.getElementById('input');
var btn =document.getElementById('btn');
var msg =document.getElementById('msg');
var alertId =document.getElementById('alertId')



////event

btn.onclick=function(){
    //get input vaile
    var input_value = input.value;

    alertId.classList.add('visually-hidden')
    
if(input_value !=""){
 //set input_value in p
 msg.innerHTML = input_value
 input.value = ""
 alert('تم اضافة '+ input_value)
}else{
   
    alert('الحقل فارغ !.. ')
}

   


}
