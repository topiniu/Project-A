/**
 * Created by topiniu on 2017/3/19.
 */

//推出按钮的动画

function changeExitBtn(i,exitBtn){
    if(exitBtn === undefined){
        return;
    }
    // alert(0);
    // console.log("i="+i);
    /*
     i=-1  -->mousedown
     i=2  -->mousedown
     i=1  -->mouseover
     i=0  -->mouseleave
     */

    // var exitBtn = document.getElementsByClassName("exitBtn")[0];

    // alert(exitBtn);
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

    var exitBtn = fnPanel.getElementsByClassName("exitBtn")[0];
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

    var textArea = fnPanel.getElementsByClassName("questionContent")[0];
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

        addQflag=0;
    }
}

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
