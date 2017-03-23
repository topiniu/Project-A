/**
 * Created by topiniu on 2017/3/19.
 */


var addQflag = 0;//用来验证用户是否点击了添加按钮
var createAnswerFlag_addPanel = 66;//from B
function createAnotherAnswer(index,toPanel){
    // alert(1);
    var flag = 0;
    if(index!=-1){
        flag = index;//强制按照参数添加answerbox
    }else {
        //维护addpanel和editepanel两个全局变量
        if(toPanel==="editQuestionForm"){
            flag = createAnswerFlag_editPanel;
        }else{
            flag = createAnswerFlag_addPanel;
        }
    }

    // alert(flag);

    // alert(createAnswerFlag+ "   " + index);
    var answerIndex = String.fromCharCode(flag);

    var p = document.createElement("p");
    p.innerHTML = "Answer " + answerIndex + ":";

    var input = document.createElement("input");
    input.type = "text";
    input.className = "answer floatRight";
    input.name = "Answer_" + answerIndex;
    input.setAttribute("placeholder","here is answer " + answerIndex);

    var input_checkbox = document.createElement("input");
    input_checkbox.type = "checkbox";
    input_checkbox.value = answerIndex;
    input_checkbox.name = "answerCheckBox";

    var div = document.createElement("div");
    div.className = "answerBox";
    div.appendChild(p);
    div.appendChild(input);
    div.appendChild(input_checkbox);

    var form = document.getElementById(toPanel);
    form.appendChild(div);



    form.scrollTop = form.scrollHeight;
    if(index==-1) {
        if (toPanel === "editQuestionForm") {
            createAnswerFlag_editPanel++;
        } else {
            createAnswerFlag_addPanel++;
        }
    }
}


function stopHandler(event) {
    window.event?window.event.cancelBubble=true:event.stopPropagation();
}

function showMessage(content){
    var p = document.getElementById("messageBoxContent");
    p.innerHTML = content;

    var showMessageBox = document.getElementById("messageBox");

    showMessageBox.style.left = "0";

    setTimeout(function(){
        showMessageBox.style.left = "-100%";
    },1800);
}


function addBtnClick(){

    addQflag=1;//用户点击了add按钮，那么推出add panel后就要加载数据


    var flag = false;//a flag to votify this question have a answer and right answer or not.
    var questionContent = document.getElementById("addQuestionContent").value;
    if(questionContent==""){//use =="" to votify if the input box is null
        alert("please type your question in the Question box.")
        return;
    }

    var answerList = [];
    var answers = document.getElementById("addQuestionForm").getElementsByClassName("answer");
    for(var i=0;i<answers.length;i++){
        if(answers[i].value != ""){//check this input box;if it is null,then do not add it to data
            answerList.push(answers[i].value);
            flag = true;
        }
    }

    if(!flag){
        alert("Your qurstion does not have any answer,please check.")
        return;
    }

    flag = false;
    var rightAnswers = [];
    var checkBox = document.getElementsByName("answerCheckBox");
    for(var i=0;i<checkBox.length;i++){
        if(checkBox[i].checked) {
            var brotherNode = document.getElementsByName("Answer_" + checkBox[i].value)[0];
            // alert(brotherNode.value);
            if(brotherNode.value != "") {//check this answer check box's brother node; if its brotherNode's val is null,then do not add this answer to Data
                rightAnswers.push(checkBox[i].value);
                flag=true;
            }
        }
    }

    if(!flag){
        alert("Your qurstion does not have any right answer,please check.")
        return;
    }

    var question = new Question(questionContent,answerList,rightAnswers);
    question.buildId();

    QUESTIONDATA.push(question);
    question.showSelf();

    showMessage("Your question has been added.");

    //重置answerindex
    createAnswerFlag_addPanel=66;
    // alert(createAnswerFlag_addPanel);
    setTimeout(emptyAddPanel,500);

}

function emptyAddPanel(){
    document.getElementById("addQuestionContent").value = "";
    while(document.getElementsByClassName("answerBox").length!=0)
    {
        var answers = document.getElementsByClassName("answerBox");
        answers[0].remove();
    }

    createAnotherAnswer(65,'addQuestionForm');
}