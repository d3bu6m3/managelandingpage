const header = document.querySelector('.header-menu');
const body = document.querySelector('body');
const fadeElems = document.querySelectorAll('.has-fade');


header.addEventListener('click', function(){
    if (this.classList.contains('open')) {
        this.classList.remove('open');
        body.classList.remove('has-open');
        fadeElems.forEach(function(element){
            element.classList.remove('fadein');
            element.classList.add('fadeout');
        });

        
    } else {
        this.classList.add('open');
        body.classList.add('has-open');
        fadeElems.forEach(function(element){
            element.classList.add('fadein');
            element.classList.remove('fadeout');
        });
    }
});


