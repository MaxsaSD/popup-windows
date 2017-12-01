$(function (){
    if ($.cookie('swnd')) {
        let delay_popup = 5000;
        setTimeout("document.getElementById('mx-wnd-container').style.display='block'", delay_popup);
    }
    $.cookie('swnd', true, {expires: 7, path: '/'});
});

function mxWndClose() {
    document.getElementById("mx-wnd-wnd").className="bounceOutDown animated";
    setTimeout("document.getElementById('mx-wnd-container').style.display='none'", 1000);
}

