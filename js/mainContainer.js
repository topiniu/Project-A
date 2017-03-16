/**
 * Created by topiniu on 2017/3/16 0016.
 */
//第一次执行展开答案时没有动画效果，因为没有给定height初始值，因为内容高度是不确定的，所以最好有一个初始化函数给每个questionItemConteiner的height赋初值
function showAnswerBtnClick(e){
    // alert(e);
    var qContent = e.parentNode.parentNode;
    var qItem = qContent.parentNode.parentNode;//showAnswersBtn--questionContent--questionItem

    var qContentHeight = qContent.offsetHeight;
    var qItemHeight = qItem.offsetHeight-4;

    console.log(qContentHeight + "  " + qItemHeight);

    if(qContentHeight == qItemHeight){//show answers
        // alert(0);
        // alert(qItem.className);
        var aContainer = qItem.getElementsByClassName("answersContainer")[0];
        var aContainerHeight =aContainer.offsetHeight;

        var h = qContentHeight + aContainerHeight + 20 + "px";

        qItem.style.transition = " all .3s";
        qItem.style.height = h;

        e.style.backgroundColor = "white";
        e.style.color = "black";

    }else{//hide answers
        qItem.style.height = qContentHeight+4+"px";
        e.style.backgroundColor = "black";
        e.style.color = "white";
    }

}

function showEditPanel(){

}