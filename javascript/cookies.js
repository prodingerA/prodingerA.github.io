document.addEventListener("DOMContentLoaded", function(event) { 
    var a = Cookies.get('acceptcookies');
    var b = document.querySelector('.acceptcookies');
    if (a) {
        document.getElementById('cookiealert').style.visibility = 'hidden';
    } else {
        document.getElementById('cookiealert').style.visibility = 'visible';
        b.addEventListener('click', function(e){
            document.getElementById('cookiealert').style.visibility = 'hidden';
            Cookies.set('acceptcookies', 'true',  {
                expires: 6969,
                path: ''
            })
        });
    }
  });