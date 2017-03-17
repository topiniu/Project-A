/**
 * Created by topiniu on 2017/3/9.
 */
var QUESTIONDATA = [];
window.onload = function() {

    bindFn();
    initQuestionItemContainerHeight();

    testData();
    onLoad();
}
function bindFn(){

    //level A btn
    var a_addQuestionBtn = document.getElementById("addQuestion");


    //level B btn

    var b_addABtn = document.getElementById("addAnswerBtn");

    //level C btn
    var c_exitBtns = document.getElementsByClassName("exitBtn");
    var addBtn = document.getElementById("saveQuestion");

    // var textContainer = document.getElementsByClassName("textContainer");

    //bind function
    if (document.addEventListener) {

        //level A btn bind fn
        a_addQuestionBtn.addEventListener("click",function (e) {
            showPanel("addFnPanel");
            stopHandler(e);
        },false);

        //level B btn bind fn
        b_addABtn.addEventListener("click",function(e){
            createAnotherAnswer(-1);
            stopHandler(e);
        },false);

        //level C btn bind fn
        for(var i=0;i<c_exitBtns.length;i++){
            c_exitBtns[i].addEventListener("mouseover", function (e) {
                changeExitBtn(1);
                stopHandler(e);
            },false);
            c_exitBtns[i].addEventListener("mouseout", function (e) {
                changeExitBtn(0);
                stopHandler(e);
            },false);
            c_exitBtns[i].addEventListener("click",function(e){
                hidePanel(this);
                stopHandler(e);
            },false);
            c_exitBtns[i].addEventListener("mousedown",function(e){
                changeExitBtn(-1);
                stopHandler(e);
            },false);
        }
        addBtn.addEventListener("click",addBtnClick,false);

        // for(var i=0;i<textContainer.length;i++){
        //     textContainer[i].addEventListener("mouseover",function(e){
        //         // alert(0);
        //         showEditPanel_toggle(this);
        //         // stopHandler(e);
        //     },false);
        //
        //     textContainer[i].addEventListener("mouseout",function(e){
        //         showEditPanel_toggle(this);
        //         // stopHandler(e);
        //     },false);
        // }

//*****************************************************************************************************8
    } else if (document.attachEvent) {//IE 8 or earlier

        //level A btn bind fn

        a_addQuestionBtn.attachEvent("onclick",function (e) {
            showPanel("addFnPanel");
            stopHandler(e);
        });

        //level B btn bind fn
        addAB.attachEvent("onclick",function (e) {
            createAnotherAnswer(-1);
            stopHandler(e);
        });


        //level C btn bind fn
        for(var i=0;i<c_exitBtns.length;i++){
            c_exitBtns[i].attachEvent("onmouseover", function (e) {
                changeExitBtn(1);
                stopHandler(e);
            });
            c_exitBtns[i].attachEvent("onmouseleave", function (e) {
                changeExitBtn(0);
                stopHandler(e);
            });
            c_exitBtns[i].attachEvent("onclick", function (e) {
                hidePanel(this);
                stopHandler(e);
            });
        }

        addBtn.attachEvent("onclick",addBtnClick);

    }

}
function onLoad(){
    for(var x in QUESTIONDATA){
        // QUESTIONDATA[x].showSelf();
        createQItem(QUESTIONDATA[x]._content,x,QUESTIONDATA[x]._answers,QUESTIONDATA[x]._rightAnswers);
    }
}
var mainContainer = document.getElementById("mainContainer");

function createQItem(content,index,answers,rightAnswers){
    // alert(mainContainer.innerHTML);

    var editQuestion = document.createElement("button");
    editQuestion.innerHTML = "edit";
    editQuestion.classList.add("editQuestion");
    editQuestion.setAttribute("value",index);

    var delQuestion = document.createElement("button");
    delQuestion.innerHTML = "del";
    delQuestion.classList.add("delQuestion");
    delQuestion.setAttribute("value",index);

    var editeBtnContainer = document.createElement("span");
    editeBtnContainer.classList.add("editBtnContainer");

    var fnBtnContainer = document.createElement("div");
    fnBtnContainer.classList.add("fnBtnContainer");
    fnBtnContainer.setAttribute("onmouseleave","showEditPanel_toggle(this)");

    editeBtnContainer.appendChild(editQuestion);
    editeBtnContainer.appendChild(delQuestion);

    fnBtnContainer.appendChild(editeBtnContainer);



    var p = document.createElement("p");
    alert(content);
    p.innerText = content;

    var textContainer = document.createElement("div");
    textContainer.setAttribute("onmouseover","showEditPanel_toggle(this)");

    var questionText = document.createElement("div");
    questionText.classList.add("questionText")

    questionText.appendChild(textContainer);
    questionText.appendChild(p);
    questionText.appendChild(fnBtnContainer);
/////////////////////////////////////////////////////////////////
    var showAnswers = document.createElement("button");
    showAnswers.innerHTML = "show answers";
    showAnswers.classList.add("showAnswers");
    showAnswers.setAttribute("onclick","showAnswerBtnClick_toggle(this)");

    var showAnswersBtn = document.createElement("div");
    showAnswersBtn.classList.add("showAnswersBtn");
    showAnswersBtn.appendChild(showAnswers);

    ////////////////////////////////////////////////////////////////////
    var questionContent = document.createElement("div");
    questionContent.classList.add("questionContent");
    questionContent.classList.add("clearfix");

    questionContent.appendChild(questionText);
    questionContent.appendChild(showAnswersBtn);

    /////////////////////////////////////////////////////////
    var questionItem = document.createElement("div");
    questionItem.classList.add("questionItem");
    questionItem.classList.add("clearfix");

    questionItem.appendChild(questionContent);

    ///////////////////////////////////////////////////////
    var answersContainer = document.createElement("div");
    answersContainer.classList.add("answersContainer");
    answersContainer.classList.add("clearfix");

    //生成answer block！
    var flagIndex = 0;
    var aIndex = 65;
    for(var x in answers){

        var span = document.createElement("span");
        span.innerHTML = String.fromCharCode(aIndex);

        var answerIndex = document.createElement("p");
        answerIndex.classList.add("answerIndex");

        answerIndex.appendChild(span);
        //////////////////////////////////////////////////////////////

        var answerContent = document.createElement("p");
        answerContent.innerText = answers[x];
        answerContent.classList.add("answerContent");

        var answerBlock  = document.createElement("div");
        answerBlock.classList.add("answerBlock");
        answerBlock.classList.add("clearfix");

        if(rightAnswers[flagIndex] === String.fromCharCode(aIndex++)){//如果这个选项跟正确答案数组的选项相同就加上正确答案样式（保证正确答案也是按照顺序排列）
            answerBlock.classList.add("rightAnswer");
            flagIndex++;
        }

        answerBlock.appendChild(answerIndex);
        answerBlock.appendChild(answerContent);

        answersContainer.appendChild(answerBlock);
    }

    var questionItemContainer = document.createElement("div");
    questionItemContainer.appendChild(questionItem);
    questionItemContainer.appendChild(answersContainer);
    questionItemContainer.classList.add("questionItemContainer");

    mainContainer.appendChild(questionItemContainer);
}