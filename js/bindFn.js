/**
 * Created by topiniu on 2017/3/9.
 */
window.onload = function() {
    //level A btn
    var a_addQuestionBtn = document.getElementById("addQuestion");
    var a_viewAllBtn = document.getElementById("viewAll");
    var a_editQuestionBtn = document.getElementById("editQuestion");
    var a_resetBtn = document.getElementById("reset");


    //level B btn

    var b_addABtn = document.getElementById("addAnswerBtn");

    //level C btn
    var c_exitBtns = document.getElementsByClassName("exitBtn");


    if (document.addEventListener) {

        //level A btn bind fn
        a_addQuestionBtn.addEventListener("click",function (e) {
            showPanel("addFnPanel");
            stopHandler(e);
        },false);


        //level B btn bind fn
        b_addABtn.addEventListener("click",function(e){
            createAnotherAnswer();
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



    } else if (document.attachEvent) {//IE 8 or earlier

        //level A btn bind fn

        a_addQuestionBtn.attachEvent("onclick",function (e) {
            showPanel("addFnPanel");
            stopHandler(e);
        });

        //level B btn bind fn
        addAB.attachEvent("onclick",function (e) {
            createAnotherAnswer();
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


    }
}