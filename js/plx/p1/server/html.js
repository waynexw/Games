
var tagHTML = "html"; 
var tagVersion = "_v0.21";

var tb = bl$("id_4_tb_server");
var v = bl$("id_4_v_server");

o.getServerFiles(tb,v,tagHTML,fcbHTML); 

function fcbHTML(p1,p2)
{
    p1.inf.toDo = function(v1){
        var vta = blo0.blDiv(v1,v1.id+"vta", tagHTML + tagVersion ,"grey"); 
        vta.innerHTML = Date();
    }
}