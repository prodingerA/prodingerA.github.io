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
}

$(document).ready(function () {
    $('#checkbox').click(function () {
        if ($(this).is(':checked')) {
            enableDarkMode();
            Cookies.set('darkmode', 'true', {
                expires: 6969,
                path: ''
            });
        } else {
            disableDarkMode();
            Cookies.set('darkmode', 'false', {
                expires: -1,
                path: ''
            })
        }
    });
    var a = Cookies.get('darkmode');

    if (a) {
        $('#checkbox').prop('checked', true);
        enableDarkMode();
    }

    $('.navbar-nav a').on('click', function () {
        $('.navbar-toggler').click();
    });
});