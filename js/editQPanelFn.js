/**
 * Created by topiniu on 2017/3/19.
 */

var mainForm = document.getElementById("editQuestionForm");
var editPanel = document.getElementById("editFnPanel");
function editQuestion(editBtn){
    // alert(editBtn.getAttribute("id"));

    var edit_mainBox = editPanel.getElementsByClassName("mainBox")[0];
    var updateButton = edit_mainBox.getElementsByClassName("updateQuestion")[0];
    updateButton.style.transition = "";
    updateButton.style.top = "60px";

    mainForm.innerHTML = "";//empty the panel

    var fatherNode = editBtn.parentNode;//.editBtnContainer
    // alert(fatherNode.className);
    var qId = fatherNode.getAttribute("data-id");

    // alert(qId);
    //渲染数据有两种方法；1，从dom元素里面提取数据加载进panel    2，从QUESTIONDATA里面循环提取数据（采用）

    var question = "";
    for(var x in QUESTIONDATA){
        // alert(0);
        if(QUESTIONDATA[x]._id === qId){
            question = QUESTIONDATA[x];
            loadContent(
                QUESTIONDATA[x]._content,
                QUESTIONDATA[x]._id,
                QUESTIONDATA[x]._answers,
                QUESTIONDATA[x]._rightAnswers
            );
            break;
        }
    }

    updateButton.setAttribute("onclick","updateQuestion(" + qId + ")");

    updateButton.style.transition = "all .2s";
    setTimeout(function(){
        updateButton.style.top = "0";
    },600);

    showPanel("editFnPanel");

    question.showSelf();
}
function loadContent(content,id,answers,rightAnswers){

    var answerIndex = 65;
    var rightAnswerIndex = 0;

    var textArea = document.createElement("textarea");
    textArea.classList.add("floatRight");
    // textArea.setAttribute("id","")
    textArea.classList.add("questionContent");
    textArea.innerText = content;

    var p1 = document.createElement("p");
    p1.innerText = "Question";

    var div1 = document.createElement("div");
    div1.appendChild(p1);
    div1.appendChild(textArea);


    mainForm.appendChild(div1);

    /////////////////////

    for(var x in answers){
        var div2 = document.createElement("div");
        div2.classList.add("answerBox");

        var p2 = document.createElement("p");
        p2.innerText ="Answer " + String.fromCharCode(answerIndex) + ":";

        var input1 = document.createElement("input");
        input1.setAttribute("type","text");
        input1.classList.add("answer");
        input1.classList.add("floatRight");
        input1.setAttribute("name","Answer_"+String.fromCharCode(answerIndex));
        input1.value = answers[x];

        var input2 = document.createElement("input");
        input2.setAttribute("type","checkbox");
        input2.value = String.fromCharCode(answerIndex);

        if(rightAnswers[rightAnswerIndex] === String.fromCharCode(answerIndex++)){
            input2.checked = true;
            rightAnswerIndex++;
        }

        div2.appendChild(p2);
        div2.appendChild(input1);
        div2.appendChild(input2);

        mainForm.appendChild(div2);
    }



    // mainForm.appendChild(div2);
}