/**
 * Created by topiniu on 2017/4/19.
 */
function login(){
    var idBox = document.getElementById("idBox");
    var passBox = document.getElementById("passBox");

    // alert(idBox.value);
    if(idBox.value==="" || passBox.value===""){
        var messsBox = document.getElementsByClassName("messageBox")[0];
        messsBox.style.animationName = "showHide";
        setTimeout(function () {
            messsBox.style.animationName = "";
        },3100);
    }else{
        localStorage.setItem("loginedManagerID",idBox.value);
        window.location.href = "Manager.html?backurl="+window.location.href;
    }
}
