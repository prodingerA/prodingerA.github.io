$(document).ready(function () {

    var a = Cookies.get('acceptcookies');
    if (a) {
        $('#cookiealert').css('visibility', 'hidden');
    } else {
        $('#cookiealert').css('visibility', 'visible');
        $('.acceptcookies').on('click', function () {
            $('#cookiealert').css('visibility', 'hidden');
            Cookies.set('acceptcookies', 'true', {
                expires: 6969,
                path: ''
            })
        });
    }
});