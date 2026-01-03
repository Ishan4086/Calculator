import { add as funcAdd, sub as funcSub, mul as funcMul, div as funcDiv } from './calculator.js';

$(document).ready(function() {
    $('#btn_add').click(() => $('#symbol').val('+'));
    $('#btn_sub').click(() => $('#symbol').val('-'));
    $('#btn_mul').click(() => $('#symbol').val('*'));
    $('#btn_div').click(() => $('#symbol').val('/'));

    $('#btn_res').click(function() {
        let x = parseInt($('#num1').val());
        let y = parseInt($('#num2').val());
        let operator = $('#symbol').val();

        if (!x && x !== 0) {
            alert("Plz enter num1");
            return;
        }
        if (!y && y !== 0) {
            alert("Plz enter num2");
            return;
        }
        if (!operator) {
            alert("Please select operation");
            return;
        }

        let res;
        switch(operator) {
            case '+': res = funcAdd(x, y); break;
            case '-': res = funcSub(x, y); break;
            case '*': res = funcMul(x, y); break;
            case '/': res = funcDiv(x, y); break;
        }
        $('#result').val(res);
    });
});