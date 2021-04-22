
function validateEmail(){
var pattern =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var inputEmailId = $(".input-text-box").val();
if(pattern.test(inputEmailId)){
  $(".after-click-text").html("Your email address has been registered.").css('color','#fff');
}
else {
  $(".after-click-text").html("Please enter a valid email address.").css('color','hsl(0, 100%, 63%)');
}
}
