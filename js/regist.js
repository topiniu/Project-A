/**
 * Created by topiniu on 2017/4/19.
 */
function regist(){
    // var nameBox = document.getElementById("name");
    var passBox = document.getElementById("pass");
    if(passBox.value !== ""){
        var m = new Manager("",passBox.value);
        m.buildID();

        var resultBox = document.getElementById("resultBox");
        resultBox.innerText = " ID: " + m._id + ". Please keep your ID and password in your mind.";

        localStorage.setItem("loginedManager",m);
    }else{
        alert("Must input password")
    }
}