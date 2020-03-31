$(document).ready(function(){
    $('input[type="checkbox"]').click(function(){
        if($(this).is(":checked")){
            $("spacer").css("background-color", "yellow");
        }
        else if($(this).is(":not(:checked)")){
         
        }
    });
});