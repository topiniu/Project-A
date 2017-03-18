/**
 * Created by topiniu on 2017/3/16 0016.
 */
//第一次执行展开答案时没有动画效果，因为没有给定height初始值，因为内容高度是不确定的，所以最好有一个初始化函数给每个questionItemConteiner的height赋初值
// var showABC_T = 0;
function initQuestionItemContainerHeight(){
    //本来是采用下面那种方法，但是后来发现对于动态加载question来说不起作用，所以干脆弄个函数直接循环给所有的item高度赋初值
    var items = document.getElementsByClassName("questionItemContainer");

    for(var i=0;i<items.length;i++){
        var questionContent = items[i].getElementsByClassName("questionContent")[0];

        items[i].style.height = questionContent.offsetHeight+4+"px";
    }
}
function showAnswerBtnClick_toggle(e){
    // alert(e);

    var qContent = e.parentNode.parentNode;//==.showAnswersBtn ==.questionContent
    var qItem = qContent.parentNode.parentNode;//== .questionItem  == .questionItemContainer

    var qContentHeight = qContent.offsetHeight;
    var qItemHeight = qItem.offsetHeight-4;


    // console.log(qContentHeight + "  " + qItemHeight);

    if(qContentHeight == qItemHeight){//show answers
        // if(showABC_T===0){//the first time excute this animate
        //     //如果这是第一次点击show answer按钮，为了避免answer container没有初始height导致动画效果无法执行，在这里给它赋初值
        //     qItem.style.height = qContentHeight+4+"px";
        //     showABC_T=1;
        // }
        // alert(0);
        // alert(qItem.className);
        var aContainer = qItem.getElementsByClassName("answersContainer")[0];
        var aContainerHeight =aContainer.offsetHeight;

        var h = qContentHeight + aContainerHeight + 20 + "px";

        qItem.style.transition = " all .3s";
        qItem.style.height = h;

        e.style.backgroundColor = "white";
        e.style.color = "black";
        e.innerHTML = "hide answers";

    }else{//hide answers
        qItem.style.height = qContentHeight+4+"px";
        e.style.backgroundColor = "black";
        e.style.color = "white";
        e.innerHTML = "show answers";
    }

}


function showEditPanel_toggle(e){
    var fnBtn = e.parentNode.getElementsByClassName("fnBtnContainer")[0];
    var fatherHeight = e.parentNode.offsetHeight;

    var top = fnBtn.offsetTop;

    if(top === fatherHeight){
        //show it
        fnBtn.style.top = 0;
    }else{
        //hide it
        fnBtn.style.top = "100%";
    }
}