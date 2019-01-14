$(document).ready(function(){
   $('#menu-btn').click(changeNav); 

   function changeNav(){
       $('#links').toggle(1300);
       $('#menu-btn').toggleClass('turn');
   }

})

