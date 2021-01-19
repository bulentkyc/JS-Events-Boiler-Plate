console.dir(document.getElementsByTagName('body'));

function $ (query, arr) {
    let res = document.querySelectorAll(query);
    console.log(res);

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

function salute() {
    alert('Hey!');
}

//regular way - built-in function:
//document.getElementById('salute').addEventListener('click', salute);

//Our own way - custom function:
$('#salute').addEventListener('click', salute);

