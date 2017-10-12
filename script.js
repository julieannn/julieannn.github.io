var scrolltop = 0;

$(window).scroll(function () {
  var st = $(this).scrollTop();
  var location = $(window).height();
  var Bottom = $(window).height() + $(window).scrollTop() > $(window).height();
   if(st > scrolltop){
      $('.menu1').fadeIn();
   }
   else if(st < scrolltop && st < location - $('.menu1').height()){
      $('.menu1').fadeOut();
   }
   if(Bottom )
   {
     $('.scrollme').hide();
     
   }
   else{
     $('.scrollme').show();
   }
   scrolltop = st;
});
document.addEventListener("DOMContentLoaded", function(){
   var options = document.getElementById("inqu");
   options.onchange = updateEmail;                    
});

function updateEmail(){
  document.getElementById("submit").style.display = "inline";
  var message ="mailto:jolieann@tamu.edu?subject="
  var input = document.getElementById("inqu");
  var choice = input.selectedIndex;
   if(choice == 1){
      message = message + "Send Me Your Resume!&body=I am requesting your resume from your website! (please add any notes here)";
      
   }
   else{
      message = message + "Please Contact Me Back";
   }
   document.getElementById("mail").href = message;
   if(choice == 2){
      document.getElementById("mail").href ="https://goo.gl/forms/3wSB1Ebb9BF5RAGy1";
   }
   console.log(message);
}