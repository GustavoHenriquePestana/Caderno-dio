$(document).ready(function(){

    $(".mn").click(function(){
        $(".submin1").slideUp("slow");
        $(this).next(".submin1").slideDown("slow");
    });

});