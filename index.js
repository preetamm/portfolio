
//import rc from './node_modules/randomcolor';

console.log($);
var percentage = [50, 78, 85, 90, 90, 95];
var state = { percntageAnimation: false };

function animatePercentage() {


    var i = 0;
    $('.skill__percentage').each(function () {

        $(this).prop('Counter', 0).animate({
            Counter: percentage[i],
        }, {
            duration: 1300,
            easing: 'swing',
            step: function (now) {
                $(this).text(`${Math.ceil(now)}%`);
                if (i <= 4) {
                    ++i;
                } else {
                    i = 0;
                }
            }
        });




    });

}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}





var bla;

var body = document.querySelector('body');
console.log(body);
function play() {
    var distance = 20;
    var count = 5;
    var countt = 0;
    bla = setInterval(function () {
        if (count > 1) {
            var wrapper = document.getElementById('animation-card-wrapper');
            wrapper.style.transform = `translateY(-${distance}%)`;
            distance = distance + 20;
            var children = document.querySelectorAll('.animation-child')[countt + 1].style.color = `${getRandomColor()}`;
            --count;
            ++countt;

        } else {
            stopAnimation()

        }

    }, 2000);


}


function animateSkills(params) {
    var i = 1;
    var j = 1;
    params.forEach(

        function (el) {

            var inmm = `.skill__percentage-indicater--${i}`;
            var indicator = document.querySelector(inmm);
            indicator.style.width = `${el}%`;

            ++i;



        }

    )

    animatePercentage()







}

function animateMe() {

    if (state.percntageAnimation === false) {
        animateSkills(percentage);
        console.log("😛");
        state.percntageAnimation = true;
    }

}

var option = {
    threshold: 0.5
}


var target;
let observer = new IntersectionObserver((entries) => {
    // console.log(entries);
    target = entries;
    var classname = entries[0].target.className;
    //console.log(classname.split(' ')[1]);

    // console.log(classname.split(' ')[1] === 'skill-section');

    if (classname.split(' ')[1] === 'skill-section') {

        /*var nodes = document.querySelectorAll('.skill-section')
        console.log(nodes)
        for(var i = 0; i<=nodes.length-1 ; i++){
            //node.style.opacity = 100;
            nodes[i].style.opacity = 100;
        }
 
        animateMe();
        */


    } else if (classname.split(' ')[0] === 'about') {
        if (entries[0].isIntersecting > 0) {
            console.log('its vis');
            entries[0].target.style.opacity = 100;
        }
    } else if (classname.split(' ')[0] === 'contact') {
        var title = document.querySelector('.contact__title');
        var btn = document.querySelector('.contact__btn');
        title.style.animationName = 'moveRight';
        btn.style.animationName = 'moveLeft';
        title.style.opacity = 100;
        btn.style.opacity = 100;

    } else if (classname.split(' ')[0] === 'work') {

        var img = document.querySelector('.work__img-gallery').children;

        var animationName = ['moveRight', 'moveLeft', 'moveLeft', 'moveUp'];

        console.log(img[0].className.split(' ')[1]);

        for (let i = 0; i < img.length; i++) {
            document.querySelector('.work').style.opacity = 100;
            document.querySelector(`.${img[i].className.split(' ')[1]}`).style.animationName = animationName[i];
        }

    }



}, option);

let observerForSkill = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting > 0) {


        console.log(entries)
        var nodes = document.querySelectorAll('.skill-section')
        console.log(nodes)
        for (var i = 0; i <= nodes.length - 1; i++) {
            //node.style.opacity = 100;
            nodes[i].style.opacity = 100;
        }

        setInterval(()=>{
            animateMe();
        }, 500)
       // console.log('done animating')
    }
}, {threshold : 0.8})


observerForSkill.observe(document.querySelector('.skills'))

observer.observe(document.querySelector('.skill-section'));

observer.observe(document.querySelector('.contact'))
observer.observe(document.querySelector('.about'));

observer.observe(document.querySelector('.work'));


function stopAnimation() {
    clearInterval(bla);
    console.log('animation stopped');
}




