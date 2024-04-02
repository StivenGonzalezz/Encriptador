var toggle = document.getElementById('container');
var body = document.querySelector('body')
var input = document.querySelector('.input')
var result = document.querySelector('.result')
var output = document.querySelector('.result')
var introductionText = document.querySelectorAll('.introductionText')
var button = document.querySelectorAll('.button')



toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    input.classList.toggle('active');
    result.classList.toggle('active');
    introductionText.forEach(introductionText=>introductionText.classList.toggle('active'))
    button.forEach(button=>button.classList.toggle('active'))
}


