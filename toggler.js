$('.toggler').click(changeMode);
var night = false;

function changeMode(){
    if(night == false){
        $('#button').removeClass('button-off');
        $('#button').addClass('button-on');
        $('.toggler').css('background-color', '#d1d1d1');
        $('.neon').removeClass('neon-off');
        $('.neon').addClass('neon-on');
        $('body').css('background-color', '#0c0c0c');
        $('#diode').removeClass('diode-off');
        $('#diode').addClass('diode-on');
        night = true;
    }
    else{
        $('#button').removeClass('button-on');
        $('#button').addClass('button-off');
        $('.toggler').css('background-color', '#0c0c0c');
        $('.neon').removeClass('neon-on');
        $('.neon').addClass('neon-off');
        $('body').css('background-color', '#d1d1d1');
        $('#diode').removeClass('diode-on');
        $('#diode').addClass('diode-off');
        night = false;
    }
}