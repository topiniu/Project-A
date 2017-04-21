/**
 * Created by topiniu on 2017/4/21.
 */

function uploadData(){
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:8080/Project_B/ajax/addQuestion"
    xhr.open("POST",url,true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4){
            alert(xhr.responseText);
        }
    }
    // alert(QUESTIONDATA.length);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
    console.log(QUESTIONDATA.toLocaleString());
    xhr.send("data=" + QUESTIONDATA);
}