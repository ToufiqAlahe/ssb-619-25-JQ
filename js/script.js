/*================JQ===================*/
$(document).ready(function(){

    // ex1
    $('#btn1').on('click',function(){
        alert("welcome");
    })

    // ex2
    $('#btn2').on('dblclick',function(){
        alert("using dblclick event");
    })

    // ex3
    $('#btn3').on('mouseover',function(){
        alert("using mouseover event");
    })

    // ex4
    $('#btnh').on('click',function(){
        $('#btn4').hide();
    })
    $('#btns').on('click',function(){
        $('#btn4').show();
    })

    // ex5
    $('#btnt').on('click',function(){
        $('#btn5').toggle();
    })
    // ex6
    $('p').on('click',function(){
        $(this).hide();
    })

    // ex7
    $('#btnfo').on('click',function(){
        $('#btn7').fadeOut();
    })
    $('#btnfi').on('click',function(){
        $('#btn7').fadeIn();
    })

    // ex8
    $('#btnft').on('click',function(){
        $('#btn8').fadeToggle();
    })

    // ex9
    $('p').on('click',function(){
        $(this).slideUp();
    })

  // ex10
    $('#btnft10').on('click',function(){
        $('#btn10').fadeToggle('fast');
    })
});