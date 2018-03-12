/**
 * Created by topiniu on 2017/4/19.
 */
function login(){
    
    var id = $('.j_idbox').val();
    var pass = $('.j_passbox').val();

    if(id === 'topiniu' && pass == 'topiniu123')
        window.location.href = 'html/manager.html'
    else{
        $('.j_msgbox').html('wrong id or password');
        $('.j_msgbox').css('opacity',1);
        setTimeout(function(){$('.j_msgbox').css('opacity',0)},2000);
        console.log('hh')
    }
}
