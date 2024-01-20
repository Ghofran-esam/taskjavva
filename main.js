var registerForm=document.querySelector(".registerForm");
var pa=document.querySelector(".result");
registerForm.onsubmit=function(e){
    e.preventDefault();
    var elementss=e.target.elements;
   var amount=elementss[0].value;
   var exchane=elementss['exchange'].value;
  if(exchane=='dollar'){
  
    pa.textContent=`Converted amount: ${0.266*amount} dollar `; }
  
  else if(exchane=='dinar'){
    pa.textContent=`Converted amount: ${0.19*amount} dinar`; }

  else{
    pa.textContent=`Converted amount: ${amount} nis`; }
  }

