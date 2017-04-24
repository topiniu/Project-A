/**
 * Created by topiniu on 2017/4/21.
 */

function uploadData(){
    var xhr = new XMLHttpRequest();
    var addQurl = "http://localhost:8080/Project_B/ajax/addQuestion";
    var addAurl = "http://localhost:8080/Project_B/ajax/addAnswers";
    // var addRAurl = "http://localhost:8080/Project_B/ajax/addQuestion";
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4){
            console.log(xhr.responseText);
        }
    }

    for(var q in QUESTIONDATA){
        var item = QUESTIONDATA[q];
        var data = "id=" + item._id+
            "&content="+item._content+
            "&managerId="+item._managerId;

        xhr.open("POST",addQurl,false);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
        xhr.send(data);

        data ="answers="+item._answers+
            "&rightAnswers="+item._rightAnswers+
            "&questionId="+item._id;


        xhr.open("POST",addAurl,false);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
        xhr.send(data);
    }
}