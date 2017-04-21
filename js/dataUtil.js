/**
 * Created by topiniu on 2017/4/21.
 */

function uploadData(){
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:8080/Project_B/ajax/addQuestion"
    xhr.open("POST",url,true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4){
            console.log(xhr.responseText);
        }
    }
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");

    for(var q in QUESTIONDATA){
        var item = QUESTIONDATA[q];
        var data = {"id":item._id,
            "content":item._content,
            "answers":item._answers,
            "rightAnswers":item._rightAnswers,
            "managerId":item._managerId};

        xhr.send("data="+data);
    }
}