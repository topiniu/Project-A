/**
 * Created by Administrator on 2017/3/8.
 */
window.onload = function(){
    document.getElementById("addQuestion").onclick = function(){

    };
    document.getElementById("viewAll").onclick = function(){
        alert(0);
    };
    document.getElementById("editQuestion").onclick = function(){
        alert(0);
    };
    document.getElementById("reset").onclick = function(){
        alert(0);
    };

    //add btn fn area
    document.getElementById("addAnswerBtn").onclick = function(){
        createAnotherAnswer();
    };
}
var createAnswerFlag = 66;//from B
function createAnotherAnswer(){
    var answerIndex = String.fromCharCode(createAnswerFlag++);

    var p = document.createElement("p");
    p.innerHTML = "Answer " + answerIndex + ":";

    var input = document.createElement("input");
    input.type = "text";
    input.className = "answer";
    input.name = "Answer_" + answerIndex;
    input.setAttribute("placeholder","here is answer " + answerIndex);

    var input_checkbox = document.createElement("input");
    input_checkbox.type = "checkbox";
    input_checkbox.name = "rightAnswers";

    var div = document.createElement("div");
    div.appendChild(p);
    div.appendChild(input);
    div.appendChild(input_checkbox);

    document.getElementById("form").appendChild(div);
}
// var a = [];
// a.push("2");
// a.push("3");
// a.push("4");
//
// var aa = "1+1=";
//
//
// var qu = new Question(aa,a);
// var i = qu.showAllAnswer();
// showT();
// var delindex = 'B';
// qu.deleteAnswer(delindex.charCodeAt()-64);
// showT();
//
//
//
// function showT(){
//     console.log(qu._content);
//     var ind = 65;
//     for(x in i){
//         console.log(String.fromCharCode(ind++) + ":  " + i[x]);
//     }
// }