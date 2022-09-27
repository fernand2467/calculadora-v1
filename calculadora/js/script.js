

const subtracao = document.querySelector('.subtracao');
const multiplicacao = document.querySelector('.multiplicacao');
const divisao = document.querySelector('.divisao');


let soma = document.querySelector('.soma');

function somaconta(){
    let n1 = Number(document.querySelector('.valor_1').value);
    let n2 = Number(document.querySelector('.valor_2').value);
    let total = n1 + n2;
    alert('total: ' + total);
}
soma.addEventListener('click', somaconta);

function subtraiconta(){
    let n1 = Number(document.querySelector('.valor_1').value);
    let n2 = Number(document.querySelector('.valor_2').value);
    let total = n1 - n2;
    alert('total: ' + total);
}
subtracao.addEventListener('click', subtraiconta);

function multiplicaconta(){
    let n1 = Number(document.querySelector('.valor_1').value);
    let n2 = Number(document.querySelector('.valor_2').value);
    let total = n1 * n2;
    alert('total: ' + total);
}
multiplicacao.addEventListener('click', multiplicaconta);

function dividiconta(){
    let n1 = Number(document.querySelector('.valor_1').value);
    let n2 = Number(document.querySelector('.valor_2').value);
    let total = n1 / n2;
    alert('total: ' + total);
}
divisao.addEventListener('click', dividiconta);