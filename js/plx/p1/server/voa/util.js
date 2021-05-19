var voaV = "v0.34";

var bbbb = true;
var nCDrawVOA = 0;
function CDrawVOA(_o){
  if(nCDrawVOA>0) return;

  var b = true;  
  this.onOff = function(){
    bbbb = !bbbb;
  } 
  this.getB = function(){
    return bbbb;
  } 
  this.draw = function(ctx){
    if(bbbb){
      _o.rect(ctx,50,150,50,50,"red");   
      _o.text(ctx,voaV,50,150);
    }
  }  

  _o.reg2draw(this);
  nCDrawVOA++;
}

function CUtilVOA(){ 
  var n = 0;
  var drw = null;
  this.reg2o = function(_o){
    drw = new CDrawVOA(_o); 
  } 
  this.onOff = function(){
    if(drw) drw.onOff();
  } 
  this.getN = function(){
    n++;
    return drw.getB() + " : " + n;
  } 
}
const voaUtil = new CUtilVOA();




voaUtil.parsePage = function(ta,txt,fileName){
    var pv = ta.parentElement;
    var v = blo0.blDiv(pv,pv.id+"v","v","grey"); 
    v.innerHTML = "xxxxx " + Date();
    ta.value = txt;
    var a = txt.split('<span class="text">Pop-out player</span>');
    for(i in a){
        var d = blo0.blDiv(v,v.id+"v"+i,"v"+i,blGrey[i]); 
        d.onclick = function(_this,_i,_a){
            return function(){
                    f(_this,_i,_a[_i],fileName);//_this.innerHTML = _a[_i];
            }
        }(d,i,a);
    }
}

var f = function(d,i,txt,fileName){
  if(0==i) f0(d,txt,fileName);
  if(1==i) f1(d,txt);
}

var f0 = function(d,txt,fileName){
  var a = txt.split('<a class="c-mmp__fallback-link" href="');
  var b = a[1].split('">');
  var c = b[0];
  d.innerHTML = c;
  blo0.blPlayer(d,"f0Test",c,100,100,400,300,"lightgreen");
  d.v = blo0.blDiv(d,"vvvvvv",c,"red"); 
  var b1 = blo0.blBtn(d.v,d.v.id+"b1","b1","grey");
  b1.onclick = function(){
    var w = {};
    w._2do = function(txt){
      //v.innerHTML = txt;
    }
    var sURL = c; 
    var a = fileName.split('.');
    var sFN = a[0] + ".mp3";
    blo0.blAjx(w,"http://localhost:8080/download?url="+sURL +"&filename=" + sFN);
  }
}

var f1 = function(d,txt){
  d.v = blo0.blDiv(d,d.id+"v","v","lightblue");  
  d.v.innerHTML = txt;
}
