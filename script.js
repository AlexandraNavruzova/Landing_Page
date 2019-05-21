
$('.slider').sss({
    slideShow : true,
    });
$(document).ready( function(){

    $('#submenu').click( function(event){
        event.stopPropagation();
        $('#items').toggle();
    });
    
    $(document).click( function(){
        $('#items').hide();
    });
    
});