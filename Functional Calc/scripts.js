import { add, sub, mul, div } from './calculator.js';

$(document).ready(function () {

    let isSecond = false;

    // Number buttons
    $('.num').click(function () {
        let val = $(this).text();
        if (!isSecond) {
            $('#num1').val($('#num1').val() + val);
        } else {
            $('#num2').val($('#num2').val() + val);
        }
    });

    // Operator buttons
    $('.op').click(function () {
        $('#symbol').val($(this).text());
        isSecond = true;
    });

    // Equals
    // Equals
$('#btn_res').click(function () {
    let x = parseFloat($('#num1').val());
    let y = parseFloat($('#num2').val());
    let op = $('#symbol').val();
    let res;

    if (isNaN(x) || isNaN(y)) {
        $('#result')
            .text("Enter valid numbers")
            .addClass('error');
        return;
    }

    switch (op) {
        case '+': res = add(x, y); break;
        case '-': res = sub(x, y); break;
        case '*': res = mul(x, y); break;
        case '/': res = div(x, y); break;
    }

    $('#result')
        .text("Result: " + res)
        .removeClass('error');
});

    // Clear
    $('#btn_clear').click(function () {
        $('#num1, #num2').val('');
        $('#symbol').val('+');
        $('#result').text('');
        isSecond = false;
    });

});
