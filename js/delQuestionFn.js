/**
 * Created by topiniu on 2017/3/22 0022.
 */
function delQuestion(qId){
    // alert("length:" + QUESTIONDATA.length);
    for(var i=0;i<QUESTIONDATA.length;i++){
        if(QUESTIONDATA[i]._id===qId){
            QUESTIONDATA.splice(i,1);
        }
    }
    // alert("length:" + QUESTIONDATA.length);
    onLoad();
}