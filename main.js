console.dir(document.getElementsByTagName('body'));

function $ (query, arr) {
    let res = document.querySelectorAll(query);
    //console.log(res);

    let output = null;

    switch (res.length) {
        case 0:
            break;
        case 1:
            if (arr) {
                output = [];
                output.push(res[0]);
            } else {
                output = res[0];
            }
            break;
        default:
            output = [];
            for (let i = 0; i < res.length; i++) {
                output.push(res[i]);
            }
            break;
    }

    return output;

}

let uName = '';

function salute(e) {
    console.log(e.target.innerHTML);
    alert(`Hey ${$('#uName').value}!`);
    alert(`Hey ${uName}!`);
    
}

//regular way - built-in function:
//document.getElementById('salute').addEventListener('click', salute);

//Our own way - custom function:
$('#salute').addEventListener('click', salute);

function uNameHandler (e) {
    console.log(e);
    console.log($('#uName').value);
    uName = $('#uName').value;
}

$('#uName').addEventListener('keyup', uNameHandler)


function secretHi(param1, e) {
    if (e.keyCode == 97) {
        alert ('Hi Boss!')
    } else {
        alert(`Nooo! You're not my dear boss`);
    }
}

//document.addEventListener('keypress', secretHi);


//Task - 1: Secret door
let userInput = '';
let keyInput = 'the404s';

function secretKeyHandler(e) {
    userInput += e.key;
    console.log(e);
    if (userInput == keyInput) {
        alert ('Welcome to the secret menu');
    }
}




function secretMouseEnterHandler() {
    //alert('enter');
    $('body').addEventListener('keyup', secretKeyHandler);
    userInput = '';
}


function secretMouseLeaveHandler() {
    //alert('leave');
    $('body').removeEventListener('keyup', secretKeyHandler);
}

$('#pic').addEventListener('mouseenter', secretMouseEnterHandler);
$('#pic').addEventListener('mouseleave', secretMouseLeaveHandler);