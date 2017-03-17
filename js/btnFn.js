/**
 * Created by topiniu on 2017/3/8.
 */

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
    console.log("i="+i);
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


    setTimeout(function () {
        i.style.transform = "rotate(45deg)";
        ii.style.transform = "rotate(-45deg)";
    },500);
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