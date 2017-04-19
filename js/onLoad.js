/**
 * Created by topiniu on 2017/3/9.
 */
var QUESTIONDATA = [];
var mainContainer = document.getElementById("mainContainer");
var nodataBoxflag = 0;//用来验证nodatabox是否存在
window.onload = function() {

    // bindFn();

    // testData();

    console.log(localStorage.getItem("loginedUser"));
    onLoad();
}
function onLoad(){
    document.getElementById("mainContainer").innerHTML = "";

    // alert(QUESTIONDATA);
    if(QUESTIONDATA.length===0){
        // alert("no any data here");
        var div = document.createElement("div");
        div.innerHTML = "Here is no data any more,you can press the add question button to add a new question."
        div.classList.add("noDataBox");
        div.setAttribute("id","noDataBox");

        mainContainer.appendChild(div);

        nodataBoxflag=1;//表明nodatabox存在
        return;
    }

    // alert("QUESTIONDATA lrngth is not 0");
    for(var x in QUESTIONDATA){
        // QUESTIONDATA[x].showSelf();
        createQItem(
            QUESTIONDATA[x]._content,
            QUESTIONDATA[x]._id,
            QUESTIONDATA[x]._answers,
            QUESTIONDATA[x]._rightAnswers,
            x
        );
    }
}

function createQItem(content,id,answers,rightAnswers,index){
    // alert(mainContainer.innerHTML);
    //从里到外

    var editQuestion = document.createElement("button");
    editQuestion.innerHTML = "edit";
    editQuestion.classList.add("editQuestion");
    editQuestion.setAttribute("value",index);
    editQuestion.setAttribute("onclick","editQuestion(this)");

    var delQuestion = document.createElement("button");
    delQuestion.innerHTML = "del";
    delQuestion.classList.add("delQuestion");
    delQuestion.setAttribute("onclick","delQuestion('" + id + "')");
    delQuestion.setAttribute("value",index);

    var editeBtnContainer = document.createElement("span");
    editeBtnContainer.classList.add("editBtnContainer");
    editeBtnContainer.setAttribute("data-id",id);

    var fnBtnContainer = document.createElement("div");
    fnBtnContainer.classList.add("fnBtnContainer");
    fnBtnContainer.setAttribute("onmouseleave","showEditPanel_toggle(this)");

    editeBtnContainer.appendChild(editQuestion);
    editeBtnContainer.appendChild(delQuestion);

    fnBtnContainer.appendChild(editeBtnContainer);



    var p = document.createElement("p");
    // alert(content);
    p.innerText = content;

    var textContainer = document.createElement("div");
    textContainer.classList.add("textContainer");
    textContainer.setAttribute("onmouseover","showEditPanel_toggle(this)");

    var questionText = document.createElement("div");
    questionText.classList.add("questionText");

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

    var flagIndex = 0;
    var aIndex = 65;

    //生成answer block！
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

        if(rightAnswers[flagIndex] === String.fromCharCode(aIndex++)){
            //如果这个选项跟正确答案数组的选项相同就加上正确答案样式（保证正确答案也是按照顺序排列）
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

    if(document.getElementById("noDataBox") !== null){
        // alert(document.getElementById("noDataBox"));
        mainContainer.removeChild(document.getElementById("noDataBox"));
        nodataBoxflag=0;
    }

    mainContainer.appendChild(questionItemContainer);


    initQuestionItemContainerHeight();
}