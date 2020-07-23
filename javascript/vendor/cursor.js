document.addEventListener("DOMContentLoaded", function(event) { 
    elementDiv = document.getElementById('beginninoflife').style.marginTop = '250px';
    // Implement AOS animations
    AOS.init();
    
    // Implement hamburger animation
    var hamburger = document.getElementById('hamburger');
    hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('open');
    });

    //Collapse Navbar and hamburger
    document.getElementById("navbar-home").addEventListener("click", collN);
    function collN() {
        $('.navbar-collapse').collapse('hide');
        hamburger.classList.toggle('open');
    }

     //landing page box animation 
     
     window.addEventListener('scroll', function() {
        let scrollingw = window.pageYOffset;
        if(scrollingw > 150){
            newScroll = scrollingw / 90;
            elementBox = document.getElementById('rotatedBox');
            elementDiv = document.getElementById('beginninoflife');
            elementBox.style['transform'] ='rotate('+newScroll+'deg)';
            elementBox.style['msTransform'] ='rotate('+newScroll+'deg)';
            elementBox.style['WebkitTransform'] ='rotate('+newScroll+'deg)';
            elementBox.style.bottom ='100px';
            elementDiv.style.marginTop = '-250px';
            elementBox.style[transition] = '2.9s ease-in-out';
        }
        if(scrollingw == 0){
            elementBox = document.getElementById('rotatedBox');
            elementDiv = document.getElementById('beginninoflife');
            elementBox.style['transform'] = 'rotate(0deg)';
            elementBox.style['msTransform'] = 'rotate(0deg)';
            elementBox.style['WebkitTransform'] ='rotate(0deg)';
            elementBox.style.bottom ='-100px';
            elementDiv.style.marginTop = '250px';
            elementDiv.style[transition] = '0.3s ease-in-out';
        }
      });

    // Implement writing text with cursor
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

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

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
});