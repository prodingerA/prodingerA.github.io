//################################################################
//################################################################
// I want a performance friendly solution for the darkmode, I tried it with prefer 
// color sheme:dark, but I dont like this way. I dont know I cannot sympathize with that
// but jQuery has to be gone! It is not very good for the website.
// If somebody knows how I solve that problem please contact me via GitHub.com
// https://github.com/prodingerA/
//################################################################
//################################################################

function enableDarkMode() {
    $('.bg-light').addClass('bg-light-dark');
    $('.navbar-light').addClass('navbar-light-dark');
    $('.box').addClass('box-dark');
    $('.white-text').addClass('text-dark-dark');
    $('.black-text').addClass('text-dark-dark');
    $('#intro').addClass('intro-dark');
    $('body').addClass('dark-dark');
    $('h1,h2,h3,h4,h5,p,a,em,i,b').addClass('text-dark-dark');
    $('.alert-info').addClass('alert-success');
    $('.needto').addClass('perm');
    $('.alert-info').removeClass('alert-info');
    $('.cont').addClass('cont-dark');
    $('#about_sectionbreak').addClass('about_sectionbreak-dark');
    $('.btn-danger').addClass('btn-success');
    $('.card').addClass('card-dark');
    $('.fa-bars').addClass('white-text');
    $('#skills_sectionbreak').addClass('skills_sectionbreak-dark');
    $('#cookiealert').addClass('cookiealert-dark');
    $('.btn-primary').addClass('btn-primary-dark');
    $('#hamburger span').addClass('hamburger-span-dark');
    document.getElementById('animatedNet').style.visibility = 'visible';

}

function disableDarkMode() {
    $('.bg-light').removeClass('bg-light-dark');
    $('.navbar-light').removeClass('navbar-light-dark');
    $('.box').removeClass('box-dark');
    $('.white-text').removeClass('text-dark-dark');
    $('.black-text').removeClass('text-dark-dark');
    $('#intro').removeClass('intro-dark');
    $('body').removeClass('dark-dark');
    $('h1,h2,h3,h4,h5,p,a,em,i,b').removeClass('text-dark-dark');
    $('.alert-success').removeClass('alert-success');
    $('.needto').removeClass('perm');
    $('.cont').removeClass('cont-dark');
    $('#about_sectionbreak').removeClass('about_sectionbreak-dark');
    $('.btn-danger').removeClass('btn-success');
    $('.card').removeClass('card-dark');
    $('.alert').addClass('alert-info');
    $('.fa-bars').removeClass('white-text');
    $('#skills_sectionbreak').removeClass('skills_sectionbreak-dark');
    $('#cookiealert').removeClass('cookiealert-dark');
    $('.btn-primary').removeClass('btn-primary-dark');
    $('#hamburger span').removeClass('hamburger-span-dark');
    document.getElementById('animatedNet').style.visibility = 'hidden';
    
}

document.addEventListener('DOMContentLoaded', function (event) {
    var darkMode = document.getElementById('darkModeCheck');
    var checkDarkMode = Cookies.get('darkmode');
    
    //checks if on rejoin the darkmode was enabled
    if (checkDarkMode) {
        darkMode.checked = true;
        enableDarkMode();
    }

    darkMode.addEventListener('click', function () {
        if (darkMode.checked) {
            //activate darkmode 
            enableDarkMode();
            Cookies.set('darkmode', 'true', {
                expires: 6969,
                path: ''
            });
        } else {
            //disable darkmode
            disableDarkMode();
            Cookies.set('darkmode', 'false', {
                expires: -1,
                path: ''
            });
        }
    });
    VANTA.NET({
        el: "#animatedNet",
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xffffff,
        backgroundColor: 0x121212,
        points: 16.00,
        maxDistance: 23.00,
        spacing: 13.00
      });
});
