var v = bl$("id_4_div_i4_c3_blrTest1");
var _s1 = new CSample1(); 
var _btn = v.getBtn(0);
_btn.value = _s1.getValue();
_btn.click();


function CSample1 (){
    var _v = "CSample1_v0.22";
    this.getValue = function(){
        var s = "// ";
        s += _v;
        s += "\n";
        s += "var os1 ={};\n";
        s += "os1.run="+_f1;
        s += "\n";
        s += "os1.run(os1);";
        return s;
    }

    var _f1 = function (_o2show){
        var d = blo0.blMD("id_1", "CSample1",    555,100,500,400, "lightgreen"); 
        d.v = blo0.blDiv(d,d.id+"v","v",blGrey[0]);
        blo0.blShowObj2Div(d.v,_o2show);        
        _on_off_div(null,d);
    };
}