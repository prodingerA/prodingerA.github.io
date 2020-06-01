document.addEventListener("DOMContentLoaded", function(event) { 
    // Check if Cookiealert is checked
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
    // Check if darkmodealert is checked
    var a = Cookies.get('darkmode');
    var b = document.querySelector('.acceptdarkmodealert');
    var c = document.querySelector('.dontacceptdarkmodealert');
    if (a) {
        document.getElementById('darkmodealert').style.visibility = 'hidden';
    } else {
        document.getElementById('darkmodealert').style.visibility = 'visible';
        b.addEventListener('click', function(e){
            enableDarkMode();
            document.getElementById('darkmodealert').style.visibility = 'hidden';
            Cookies.set('acceptdarkmodealert', 'true',  {
                expires: 6969,
                path: ''
            })
        });
        c.addEventListener('click', function(e){
            disableDarkMode();
            document.getElementById('darkmodealert').style.visibility = 'hidden';
        });
    }
  });