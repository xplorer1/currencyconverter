$(document).ready(function() {
    $(".pwdeye a").on('click', function(event) {
        event.preventDefault();
        if($('.pwdeye input').attr("type") == "text"){
            $('.pwdeye input').attr('type', 'password');
            $('.pwdeye i').addClass( "fa-eye-slash" );
            $('.pwdeye i').removeClass( "fa-eye" );
        }else if($('.pwdeye input').attr("type") == "password"){
            $('.pwdeye input').attr('type', 'text');
            $('.pwdeye i').removeClass( "fa-eye-slash" );
            $('.pwdeye i').addClass( "fa-eye" );
        }
    });
});