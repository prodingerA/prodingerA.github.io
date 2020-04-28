function enableDarkMode() {
    $('.bg-light').addClass('bg-light-dark');
    $('.navbar-light').addClass('navbar-light-dark');
    $('.box').addClass('box-dark');
    $('.white-text').addClass('text-dark-dark');
    $('.black-text').addClass('text-dark-dark');
    $('#intro').addClass('intro-dark');
    $('body').addClass('dark-dark');
    $('h1,h2,h3,h4,h5,p,a,em,i').addClass('text-dark-dark');
    $('.alert-info').addClass('alert-success');
    $('.needto').addClass('perm');
    $('.alert-info').removeClass('alert-info');
    $('.cont').addClass('cont-dark');
    $('#about_sectionbreak').addClass('about_sectionbreak-dark');
    $('.btn-danger').addClass('btn-success');
    $('.card').addClass('card-dark');
    $('.fa-bars').addClass('white-text');
    $('#skills_sectionbreak').addClass('skills_sectionbreak-dark');
}

function disableDarkMode() {
    $('.bg-light').removeClass('bg-light-dark');
    $('.navbar-light').removeClass('navbar-light-dark');
    $('.box').removeClass('box-dark');
    $('.white-text').removeClass('text-dark-dark');
    $('.black-text').removeClass('text-dark-dark');
    $('#intro').removeClass('intro-dark');
    $('body').removeClass('dark-dark');
    $('h1,h2,h3,h4,h5,p,a,em,i').removeClass('text-dark-dark');
    $('.alert-success').removeClass('alert-success');
    $('.needto').removeClass('perm');
    $('.cont').removeClass('cont-dark');
    $('#about_sectionbreak').removeClass('about_sectionbreak-dark');
    $('.btn-danger').removeClass('btn-success');
    $('.card').removeClass('card-dark');
    $('.alert').addClass('alert-info');
    $('.fa-bars').removeClass('white-text');
    $('#skills_sectionbreak').removeClass('skills_sectionbreak-dark');
}

$(document).ready(function () {
    $('#checkbox').click(function () {
        if ($(this).is(':checked')) {
            enableDarkMode();
            document.cookie = 'darkmode = true; Expires=Sun, 22 Oct 2069 08:00:00 GMT';
        } else {
            disableDarkMode();
            document.cookie = 'darkmode =;Expires=Thu, 01 Jan 1970 00:00:00 GMT';
        }
    });

    $('.navbar-nav a').on('click', function () {
        $('.navbar-toggler').click();
    });

    if (document.cookie) {
        $('#checkbox').prop('checked', true);
        enableDarkMode();
    }

    var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    window.onload = function () {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
});