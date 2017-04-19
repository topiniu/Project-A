/**
 * Created by topiniu on 2017/4/19.
 */
function login(){
    var idBox = document.getElementsById("idBox");
    var passBox = document.getElementById("passBox");

    if(idBox.value===null || passBox.value===null){
        var messsBox = document.getElementsByClassName("messageBox")[0];
        messsBox.style.animationName = "showHide";
    }
}
