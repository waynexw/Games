var tag = "server.js_v0.24";
var tb = bl$("id_p1_tb"); 
    
tb.btnServer = blo0.blBtn(tb,"btnServer","Server",blGrey[2]);
tb.btnServer.style.float = "left";

tb.btnServer.onclick = function(){
    if(!this.pg)  this.pg = new CServer(btn4p1.v);
    this.pg.show(this);
} 

function CServer(parentDiv){
    var p = parentDiv;
    var ui = null;
    var x = 0;
    var y = 220;
    var w = 500;
    var h = 50;
    var xDbg = 20;
    var yDbg = 55;
    var wDbg = 20;
    var hDbg = 20;
    var cDbg = "lightgreen";
    
    this.show = function(b){ 
        if(!ui){
            ui=blo0.blMDiv(p,"id_mdiv_4_server",tag,x,y,w,h,blGrey[0]);
            
            ui.inf = {};
            ui.inf.x = 123;
            ui.inf.y = 321;
            ui.inf.l8080 = "http://localhost:8080";  
            ui.inf.href = window.location.href;  
            ui.inf.file = "No file.";  
            ui.inf.text = "server.text";   

            
            var tb4VOA = blo0.blDiv(ui,"id_tb4VOA","tb4VOA",blGrey[1]);
            if(!tb4VOA.load_asItIs){ 
                blo0.blScript("id_js_asItIs","js/plx/voa/asItIs.js");
                tb4VOA.load_asItIs = true;
            }


            var tb = blo0.blDiv(ui, "id_4_tb_server","tb",blGrey[1]);
            var v = blo0.blDiv(ui, "id_4_v_server","v",blGrey[2]);
            tb.b1 = o.dbgBtn(tb,"id_btn_4_dbgServer","dbg");
            o.getServerFiles(tb,v,"json"); 
            o.getServerFiles(tb,v,"mp3"); 
            o.getServerFiles(tb,v,"mp4");   
            
            blo0.blScript("id_js_load_server-jpg","js/plx/p1/server/jpg.js");
            blo0.blScript("id_js_load_server-js","js/plx/p1/server/js.js");
            blo0.blScript("id_js_load_server-webm","js/plx/p1/server/webm.js");
            blo0.blScript("id_js_load_server-html","js/plx/p1/server/html.js");
            blo0.blScript("id_js_load_server-voa","js/plx/p1/server/voa.js");
            blo0.blScript("id_js_load_server-bat","js/plx/p1/server/bat.js");

            
            ui.draw = function(ctx){
                if(tb.b1.b)  {
                    o.rect(ctx,xDbg,yDbg,wDbg,hDbg,cDbg);    
                    o.text(ctx,ui.id,xDbg,yDbg);
                    o.rendFile(ctx,ui.inf.file,xDbg+20,yDbg+20,192,108);
                }   
            }
            ui.mousedown = function(x,y){   
                if(!tb.b1.b) return;

                if(cDbg=="lightgreen"){
                    if(o.inRect(x,y,xDbg,yDbg,wDbg,hDbg)){
                        cDbg = "yellow";
                        o.status(ui);
                    }
                }
                else if(cDbg=="yellow"){
                    cDbg = "lightgreen";
                    xDbg =x;
                    yDbg = y;
                }
            }
            o.regMousedown(ui);
            o.reg2draw(ui);
        }
        _on_off_div(b,ui);
        b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];    
    }
}