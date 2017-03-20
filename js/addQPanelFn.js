/**
 * Created by topiniu on 2017/3/19.
 */


var addQflag = 0;//用来验证用户是否点击了添加按钮
var createAnswerFlag = 66;//from B
function createAnotherAnswer(index){
    // alert(1);
    if(index!=-1){
        createAnswerFlag = index;
    }
    // alert(createAnswerFlag+ "   " + index);
    var answerIndex = String.fromCharCode(createAnswerFlag++);

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

    var form = document.getElementById("addQuestionForm");
    form.appendChild(div);

    form.scrollTop = form.scrollHeight;
}


//find node whinch one's id equals wantNodeId
// function getExitBtnById(panelId){
//     var nodes = document.getElementById(panelId).children;
//     var node = null;
//     for(var i=0;i<nodes.length;i++){
//         if(nodes[i].className==="topbar"){
//             var nodess = nodes[i].children;
//             var j=0;
//             for(;j<nodess.length;j++){
//                 if(nodess[j].getAttribute("class")==="exitBtn")
//                     node = nodess[j];
//             }
//         }
//     }
//     return node;
// }

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

    setTimeout(emptyAddPanel,1000);

}

function emptyAddPanel(){
    document.getElementById("addQuestionContent").value = "";
    while(document.getElementsByClassName("answerBox").length!=0)
    {
        var answers = document.getElementsByClassName("answerBox");
        answers[0].remove();
    }

    createAnotherAnswer(65);
}