function changeColorOne(){
    var mark1 = document.getElementById("book1");
    mark1.classList.toggle('active');
    
}
function changeColorTwo(){
    var mark2 = document.getElementById("book2");
    mark2.classList.toggle('active');
    
}
function changeColorThree(){
    var mark3 = document.getElementById("book3");
    mark3.classList.toggle('active');
    
}

function del(){
    var input = document.getElementById("em");
    input.value = ''
}

function alert (){
    var click = document.getElementById('pro')
    click = confirm('Вы хотите приобрести подписку PRO?')
    if(click = true){
        window.location.href = 'sign.html'
    }
}