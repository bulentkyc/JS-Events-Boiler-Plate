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


//Task - 1 & 2 : Secret door
let userInput = '';

function secretKeyHandler(e) {
    userInput += e.key;
    console.log(e);
    if (userInput == 'the404s') {
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


//Task - 3:

function picClickHandler(text, event) {
    alert(text + event.target.src);
}

function middleWare(e) {
    console.log(e);
    picClickHandler('Happy Hacking \n', e);
}

$('#pic').addEventListener('click',middleWare);

$('#pic').addEventListener('click', function (e) { picClickHandler(userInput, e) });

//$('#pic').addEventListener('keypress',); 
//
/* 
function calc(a,b) {
    return(a+b);
}

$('#pic').addEventListener('keyup', calc) */

function submitHandler(e) {
    e.preventDefault();
    let userData = {};
    console.dir(e);
    alert('Here we go');
/* 
    //v1
    userData.name = e.target[0].value;
    userData.lastName = e.target[1].value;
    userData.address = e.target[2].value;
 */

    //v2
    console.log(e.target.length);
    for (let i = 0; i < e.target.length-1; i++) {
        userData[e.target[i].id] = e.target[i].value
    }
   

    console.log(userData);

    let submitText = `<p class='alert-success'>Dear ${userData.name} ${userData.lastName}, your address is saved successfully as ${userData.address} </p>`

    //$('body').innerHTML = $('body').innerHTML + submitText;
    $('body').insertAdjacentHTML('beforeend', submitText);
}

$('#myForm').addEventListener('submit', submitHandler);

