/**
 * Created by topiniu on 2017/4/19.
 */
function Manager(password){
    this._id = "";
    this._password = password;
}

Manager.prototype.buildID = function(){
    var d = new Date();

    this._id =d.getYear()+
        d.getMonth() +
        d.getDay() +
        d.getHours() +
        d.getMinutes() +
        d.getSeconds() +
        d.getMilliseconds();
}

Manager.prototype.updatePass =function(newPass){
    this._password = newPass;
}