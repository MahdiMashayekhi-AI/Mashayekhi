var i = 0;
var text = ' Im a Machine Learning and Python programmer!';
var speed = 35;

function typeWriter(){
    if(i < text.length){
        document.getElementById("demo").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter,speed);
    }
}



function myFunc() {
    var text = document.getElementById("text");
    text.innerHTML = "Whats up guys?";
}

function backGet() {
    var text = document.getElementById("text");
    text.innerHTML = "Hello. I am programmer!";
}
