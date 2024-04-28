var toggle = document.getElementById('container')   
var body = document.querySelector('body')
var input = document.querySelector('.input')
var result = document.querySelector('.result')
var output = document.querySelector('.result')
var introductionText = document.querySelectorAll('.introductionText')
var button = document.querySelectorAll('.button')
var textResult = document.getElementById('encryptedResult')

toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    input.classList.toggle('active');
    result.classList.toggle('active');
    introductionText.forEach(introductionText=>introductionText.classList.toggle('active'))
    button.forEach(button=>button.classList.toggle('active'))
}


function encrypt(){
    var text = document.getElementById('textToEncrypt').value.toLowerCase();


    var ecryptedText = text.replace(/e/img, "enter");
    var ecryptedText = ecryptedText.replace(/o/img, "ober");
    var ecryptedText = ecryptedText.replace(/i/img, "imes");
    var ecryptedText = ecryptedText.replace(/a/img, "ai");
    var ecryptedText = ecryptedText.replace(/u/img, "ufat");


    document.getElementById('encryptedResult').innerHTML = ecryptedText;
}

function decrypt(){
    var text = document.getElementById('textToEncrypt').value.toLowerCase();


    var ecryptedText = text.replace(/enter/img, "e");
    var ecryptedText = ecryptedText.replace(/ober/img, "o");
    var ecryptedText = ecryptedText.replace(/imes/img, "i");
    var ecryptedText = ecryptedText.replace(/ai/img, "a");
    var ecryptedText = ecryptedText.replace(/ufat/img, "u");


    document.getElementById('encryptedResult').innerHTML = ecryptedText;
}

function clean(){
    document.getElementById('textToEncrypt').value = "";
    document.getElementById('encryptedResult').value = "";
}

function copy(){
    textResult.select();
    document.execCommand('copy');
}
