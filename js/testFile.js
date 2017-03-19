/**
 * Created by topiniu on 2017/3/17.
 */
function testData() {
    var c = "为什么我这么帅？为什么我这么帅？为什么我这么帅？为什么我这么帅？为什么我这么帅？";
    var a = ["天生的天生的天生的天生的天生的天生的", "天生的天生的天生的天生的", "天生的天生的",
        "天生的天生的天生的天生的天生的天生的天生的天生的天生的天生的天生的天生的"];
    var r = ["A", "C"]

    var q = new Question(c, a, r);
    q.buildId();

    QUESTIONDATA.push(q);

    c = "1+1=?";
    a = ["1", "2", "3", "4"];
    r = ["B"];

    q = new Question(c, a, r);
    q.buildId();

    QUESTIONDATA.push(q);

    c = "树上7只猴，地上8只猴，树上走了一只猴，还有多少猴？"
    a = ["1", "6", "14", "15"];
    r = ["C"];

    q = new Question(c, a, r);
    q.buildId();

    QUESTIONDATA.push(q);
}