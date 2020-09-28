$('a[href^="#"]').click(function(event) {
    var id = $(this).attr("href");
    var target = $(id).offset().top;
    $('html, body').animate({scrollTop:target}, 500);
    event.preventDefault();
});

function getTargetTop(elem){
    var id = elem.attr("href");
    var offset = 60;
    return $(id).offset().top - offset;
}


    $(window).scroll(function(e){
        isSelected($(window).scrollTop())
    });

    var sections = $('a[href^="#"]');

    function isSelected(scrolledTo){
        var threshold = 100;
        var i;

        for (i = 0; i < sections.length; i++) {
            var section = $(sections[i]);
            var target = getTargetTop(section);
          
            if (scrolledTo > target - threshold && scrolledTo < target + threshold) {
                sections.removeClass("active");
                section.addClass("active");

            }

        };
}

// parallax 

let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");
let navbar = document.getElementById("navBarController")



window.addEventListener('scroll', function(){
  var value = window.scrollY;
  bg.style.top = value * 0.5 + 'px';
  moon.style.left = -value * 0.5 + 'px';
  mountain.style.top = -value * 0.15 + 'px';
  road.style.top = value * 0.15 + 'px';
  text.style.top = value * 1 + 'px';
  text.style.top = value * 1 + 'px';
})

document.documentElement.className = 'js';
	var supportsCssVars = function() {
	var s = document.createElement('style'),support;

		s.innerHTML = "root: { --tmp-var: bold; }";
		document.head.appendChild(s);
		support = !!(window.CSS && window.CSS.supports && window.CSS.supports('font-weight', 'var(--tmp-var)'));
		s.parentNode.removeChild(s);
		return support;
	}
		if (!supportsCssVars()) alert('Please view this demo in a modern browser that supports CSS Variables.')