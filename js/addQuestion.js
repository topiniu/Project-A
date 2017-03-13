/**
 * Created by Administrator on 2017/3/13.
 */
function addBtnClick(){

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