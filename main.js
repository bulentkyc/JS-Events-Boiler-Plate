//Time-stamp for Js start
console.log(1,new Date().getTime());
window.addEventListener('load', app);
/* 
let menu = [
    {
        menuId: 1,
        title: 'Pages',
        link: null,
        children: [
            {
                menuId: 2,
                title: 'Account',
                link: null,
                children:[]
            },
            {
                menuId: 3,
                title: 'Authentication',
                link: null,
                children:[
                    {
                        menuId: 4,
                        title: 'Basic',
                        link: null,
                        children:[]
                    }
                ]
            }
        ],

]
 */

//console.dir(document.getElementsByTagName('body'));
function $ (query, log, arr, index) {
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

    if (index >= 0) {
        if (res.length <= 1) {
            throw ('Hey you have just 1 item or any. Please don\'t set any index for this quey');
            //console.warn('Hey you have just 1 item or any. Please don\'t set any index for this quey')
        }
        if (log != null) {
            console.log(log +': ', output[index]);
        }
        
        return output[index];
    } else {
        if (log != null) {
            console.log(log +': ', output);
        }
        return output;
    }
    

}

function app () {
    //alert('Hop')
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

    //console.log($('#pic', 2));
    /* 
    console.log($('input'));

    $('input', 'bulent');

    console.log($('#pic',null, true));

    $('#pic', 'bulent', true);



    $('input', 'all inputs in the form');

    console.log('all inputs in the form' +':', $('input'));
    console.log('all inputs in the form' +':', document.querySelectorAll('input'));


    $('input', '2. input', true, 2);
    $('input', 2, true, 2);

    $('input', false, true, 0);


    */



    console.log($('#pic'));

    //$('#pic').src = 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png';

    //$('#pic', 'test 1').src = 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png';


    $('input', 'inputs')[2].style.border = '2px solid red';

    $('#pic', null, false).style.border = '2px solid red';

    
    function resetFormHandler(e) {
        alert('Hey are you serious? You\'re resetting the form!');
        console.log(e);
        console.log(e.target[0].value);

        //e.preventDefault();
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

        let submitText = `<p class='alert-danger'>Dear ${userData.name} ${userData.lastName}, your address is saved successfully as ${userData.address} </p>`

        //$('body').innerHTML = $('body').innerHTML + submitText;
        $('body').insertAdjacentHTML('beforeend', submitText);

    }
    
    
    document.getElementById('myForm').addEventListener('reset', resetFormHandler)
    
    
    
    

    //Time-stamp for Dom adn JS ready
    console.log(2,new Date().getTime());

    //$ ('#uName','test',true,5)

    console.log(window.location)

//alert(window.location)

//$('input',null,true,0).value = window.location.pathname

window.addEventListener('click', function(){console.log('Window')});

/*
Capturing phase – the event goes down to the element.
Target phase – the event reached the target element.
Bubbling phase – the event bubbles up from the element.
*/


function eventLogger(e) {
/* 
    if (e.currentTarget.id == 'goalGrandPa') {
        e.stopPropagation();
    }
 */
    //e.stopPropagation();
    //console.log(e)
    console.log('Target: ', e.target.id);
    console.log('Current-target: ', e.currentTarget.id);
}

document.getElementById('goal').addEventListener('click', eventLogger);
document.getElementById('goalParent').addEventListener('click', eventLogger);
document.getElementById('goalGrandPa').addEventListener('click', eventLogger);

function menuHandler(e) {
    //alert(e.target.innerHTML)
    if(!e.target.classList.contains('menu-item')){
        //alert(e.target.innerHTML)
        if (e.target.parentElement.children[1].style.display != 'block') {
            e.target.parentElement.children[1].style.display = 'block'
        } else {
            e.target.parentElement.children[1].style.display = 'none'
        }
        
    }
}

document.querySelector('#side-menu').addEventListener('click', menuHandler);
}

console.log(3,new Date());

