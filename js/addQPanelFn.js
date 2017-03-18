/**
 * Created by topiniu on 2017/3/19.
 */


var addQflag = 0;//用来验证用户是否点击了添加按钮
var createAnswerFlag = 66;//from B
function createAnotherAnswer(index){
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
    input_checkbox.name = "rightAnswers";

    var div = document.createElement("div");
    div.className = "answerBox";
    div.appendChild(p);
    div.appendChild(input);
    div.appendChild(input_checkbox);

    var form = document.getElementById("form");
    form.appendChild(div);

    form.scrollTop = form.scrollHeight;
}


//推出按钮的动画

function changeExitBtn(i){
    // console.log("i="+i);
    /*
     i=-1  -->mousedown
     i=2  -->mousedown
     i=1  -->mouseover
     i=0  -->mouseleave
     */

    var exitBtn = document.getElementsByClassName("exitBtn")[0];

    var nodes = exitBtn.children;


    if(i==-1){
        nodes[0].style.transform = "rotate(90deg)";
        nodes[1].style.transform = "rotate(-90deg)";
        return;
    }



    //设置x号颜色
    //设置span的背景色
    var aColor = i?"#cc0000":"white";
    var spanBackColor = i?"white":"#3c3c3c";

    exitBtn.style.backgroundColor = spanBackColor;

    for(var j=0;j<nodes.length;j++){
        nodes[j].style.backgroundColor = aColor;
    }

}
function showPanel(panelId){


    var panelContainer = document.getElementById("panelContainer");

    panelContainer.style.zIndex = "1";
    panelContainer.style.opacity = "1";

    var fnPanel = document.getElementById(panelId);
    fnPanel.style.transform = "translate(-50%,-50%) scale(1)";

    var exitBtn = getExitBtnById(panelId);
    var i = exitBtn.firstElementChild;
    var ii = exitBtn.lastElementChild;

    var mainContainer = document.getElementById("mainContainer");
    var mainBtnContainer = document.getElementById("mainbtn_container");

    mainContainer.style.filter = "blur(5px)";
    mainBtnContainer.style.filter = "blur(5px)";


    setTimeout(function () {
        i.style.transform = "rotate(45deg)";
        ii.style.transform = "rotate(-45deg)";
    },500);

    var textArea = document.getElementById("questionContent");
    textArea.focus();
}

function hidePanel(exitBtn){

    var i = exitBtn.firstElementChild;
    var ii = exitBtn.lastElementChild;

    i.style.transform = "rotate(0deg)";
    ii.style.transform = "rotate(0deg)";

    var fnPanel = exitBtn.parentElement.parentElement;
    fnPanel.style.transform = "translate(-50%,-50%) scale(0)";


    var panelContainer = document.getElementById("panelContainer");


    panelContainer.style.opacity = "0";
    panelContainer.style.zIndex = "-1";


    var mainContainer = document.getElementById("mainContainer");
    var mainBtnContainer = document.getElementById("mainbtn_container");

    mainContainer.style.filter = "blur(0)";
    mainBtnContainer.style.filter = "blur(0)";

    if(addQflag===1){
        //用户单击过addbutton，重新加载数据，并归位flag
        // alert("onload will excute");
        onLoad();
        initQuestionItemContainerHeight();

        addQflag=0;
    }
}

//find node whinch one's id equals wantNodeId
function getExitBtnById(panelId){
    var nodes = document.getElementById(panelId).children;
    var node = null;
    for(var i=0;i<nodes.length;i++){
        if(nodes[i].getAttribute("id")==="topbar"){
            var nodess = nodes[i].children;
            var j=0;
            for(;j<nodess.length;j++){
                if(nodess[j].getAttribute("class")==="exitBtn")
                    node = nodess[j];
            }
        }
    }
    return node;
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
    var questionContent = document.getElementById("questionContent").value;
    if(questionContent==""){//use =="" to votify if the input box is null
        alert("please type your question in the Question box.")
        return;
    }

    var answerList = [];
    var answers = document.getElementsByClassName("answer");
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
    var checkBox = document.getElementsByName("rightAnswers");
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


    QUESTIONDATA.push(question);
    question.showSelf();

    showMessage("Your question has been added.");

    setTimeout(emptyAddPanel,1000);

}

function emptyAddPanel(){
    document.getElementById("questionContent").value = "";
    while(document.getElementsByClassName("answerBox").length!=0)
    {
        var answers = document.getElementsByClassName("answerBox");
        answers[0].remove();
    }

    createAnotherAnswer(65);
}