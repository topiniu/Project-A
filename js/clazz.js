/**
 * Created by Administrator on 2017/3/8 0008.
 */

//调查问卷类--构造器加原型模式实现
function Question(content,answers,rightAnswers){
    this._content = content;
    this._answers = answers;
    this._rightAnswers = rightAnswers;
};
//对content操作函数
Question.prototype.editContent = function(content){
    this._content = content;
};
//对Answers操作函数
Question.prototype.addAnswer = function(answer){
    this._answers.push(answer);
};
Question.prototype.deleteAnswer = function(index){
    this._answers.splice(index-1,1);
};
Question.prototype.editAnswer = function(index,newAnswer){
    this._answers[index] = newAnswer;
};
Question.prototype.showAllAnswer = function(){
    return this._answers;
};
//对rightAnswers操作函数
Question.prototype.editRightAnswers = function(rightAnswers){
    this._rightAnswers = rightAnswers;
}

Question.prototype.showSelf = function(){
    console.log("Qusetion= " + this._content);

    var a = 65;
    for(var i=0;i<this._answers.length;i++){
        console.log(String.fromCharCode(a++) + "  " + this._answers[i]);
    }

    console.log("\nRight answer:")
    for(var i=0;i<this._rightAnswers.length;i++){
        console.log(this._rightAnswers[i]);
    }


    console.log("\n\n")
}
