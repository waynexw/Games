//i4c4
var s= "v0.0.55 "; 
s += "<a target='_blank' href='https://github.com/jeremyjia/Games/edit/master/issues/4/c4.js'"
s += " style='color:blue;'";		s +=">"; s += "c4.js* ";
s += "<a target='_blank' href='https://jeremyjia.github.io/Games/issues/4/c4.js'"
s += " style='color:green;'";		s +=">"; s += "c4.js ";
s += "<a target='_blank' href='https://jeremyjia.github.io/Games/issues/4/c4Test.html'"
s += " style='color:brown;'";		s +=">"; s += "c4Test.html";

var md = blo0.blDiv(document.body, "div_ID_4_I4C4", s ,blGrey[0]);  
if(!md.run){
    md.run = true; 
	var style ="position: absolute;";
	style += "z-index: 9;";
	style += "background-color: #f1f1f1;";
	style += "text-align: center;";
	style += "border: 1px solid #d3d3d3;";
	style += "left: 400px";
	style += "top: 40px";
	style += "width: 540px";
	md.style =style;
	
	var title = blo0.blDiv(md , "div_ID_4_I4C4" + "Header", "Header");
	style ="padding: 10px;";
	style += "z-index: 10;";
	style += "cursor: move;";
	style += "text-align: center;";
	style += "border: 1px solid #fff;";
	style += "background-color: #2196F3;";
	title.style =style;
 
    blo0.blMakeDivMovable(md);
	md.style.left = "400px";
	md.style.top = "40px";

	md.v = blo0.blDiv(md,md.id+"v","",blColor[1]);
	
    md.v.userInfo = blo0.blDiv(md.v,md.v.id+"userInfo","User:",blColor[1]);
	md.v.btnExit = blo0.blBtn(md.v, md.v.id + "btnExit", 'Logoff', blGrey[1]);
    md.v.btnExit.onclick = function(){
	   bl$(md.v.id).style.display = "none";
	   bl$(md.vLogin.id).style.display = "block";
	   clearInterval(timerId);
    }
	
	md.v.ta = blo0.blTextarea(md.v, "id_4_ta_showMsg", "", blGrey[3]);
	md.v.ta.style.width="98%"; 
	md.v.ta.style.height="240px"; 
	
	md.v.ta1 = blo0.blTextarea(md.v, "id_4_ta_SendMsg", "", blGrey[4]);
	md.v.ta1.style.width="98%"; 
	md.v.ta1.style.height="40px";
	
	md.v.btnSend = blo0.blBtn(md.v,md.v.id+"btnSend","SendMsg",blColor[4]);
	md.v.btnClear = blo0.blBtn(md.v,md.v.id+"btnClear","ClearMsg",blColor[4]);
	
	md.v.btnSend.onclick= function(){	
	   var s = md.v.ta1.value;
	   if(s!=""){
		 dispatchMessage(s);
	   }
	   md.v.ta1.value="";
	   //setTimeout("readMsg()", 1000)
	}
	md.v.btnClear.onclick= function(){s
	   allMsg="";
       SendMsg("Let's chat");
       //setTimeout("readMsg()", 200)	   
	}
	
	var loginUsers = new Array("Jeremyjia","littleflute","Xiyu");
	md.vUser = blo0.blDiv(md.v, md.id+"div_user_list","",blColor[2]);
    md.vUser.style.width="98%"; 
	md.vUser.style.height="80px";
	
	var oAhref = blo0.blLink(md.vUser, md.vUser.id+"refresh","Get online user",'javascript:void(0);',blGrey[0]);
	oAhref.onclick = function(){
		if(md.vUser.Temp)
		{
		   md.vUser.removeChild(md.vUser.Temp);
		}
		md.vUser.Temp = blo0.blDiv(md.vUser, md.vUser.id+"user_list","",blColor[2]);
		loginUsers.forEach(listUser);	
    }
	 function listUser(value, index, array) {
     	var user = value;
		var oLi= document.createElement('li');
		var oLabel = document.createElement("label");
		var label_text = document.createTextNode(user);
		oLabel.appendChild(label_text);
		oLi.appendChild(oLabel);
		
		md.vUser.Temp.appendChild(oLi);
     }
	 var timerId;	 
	 function readTimer(){
		readMsg();
	    md.v.ta.value = allMsg; 
	 }
	
	var allMsg="";
	bl$(md.v.id).style.display = "none";
	
	//Login
	md.vLogin = blo0.blDiv(md,md.id+"vLogin","User Name:",blColor[1]);
	
	md.vLogin.ta = blo0.blTextarea(md.vLogin, md.vLogin.id+"ta", "", blGrey[3]);
	md.vLogin.ta.style.width="50%"; 
	md.vLogin.ta.style.height="25px";
	
	md.v.line = blo0.blDiv(md.vLogin, md.vLogin.id+"line","",blColor[1]);
	md.vLogin.btnLogin = blo0.blBtn(md.vLogin,md.vLogin.id+"btnLogin","Login",blColor[2]);	
	md.vLogin.btnLogin.onclick= function(){	
	
	   if(md.vLogin.ta.value==""){
		   alert("Please input a user name");
		   return;
	   }
	   var userName= md.vLogin.ta.value;
	   md.v.userInfo.innerHTML ="User:" + userName;
       bl$(md.v.id).style.display = "block";
	   bl$(md.vLogin.id).style.display = "none";
	   timerId = setInterval(readTimer, 1000);

	}
	//End Login
	
	function addBtn(number)
	{
	  md.v.d1 = blo0.blDiv(md,md.id+"vd1","",blColor[1]);
	  function _Comments(o) {
		var index = 0;
		var parentDiv = md.v.d1;
		for(i in o){
		 index++;
		 if(index == number)
		 {
			var a = o[i].body;
			
			var oTd = document.createElement('td');
			parentDiv.appendChild(oTd);
			
			var btnJS = blo0.blBtn(oTd, parentDiv.id+"btnJS"+index,index,blGrey[2]);
			btnJS.onclick = function(_txt){
			return function(){
			eval( _txt);
			}
			}(a);
			var oA = blo0.blLink(oTd, parentDiv.id+"blLink"+index,"Delete",'javascript:;',blGrey[0]);
			oA.onclick = function(){
              parentDiv.removeChild(this.parentNode);
            }
		 }
	
		}
	 }
	 
	 var _src = "https://api.github.com/repos/jeremyjia/Games/issues/4/comments";
	 w3.getHttpObject(_src, _Comments);
    }
	
	function dispatchMessage(message){
		var beginWith = message.toLowerCase().substr(0,4); 
		if( beginWith == "cmd:" ){
			var id = message.substr(message.indexOf(":")+1);
			if(id == "help"){
			  var help = "Please use \"cmd:number\" format to load our plugins.";
			  SendMsg(help);
			}else{
			  addBtn(id);
			}
		}else{
			var user_Name=md.vLogin.ta.value;
			var sMsg = user_Name+":"+message;
			SendMsg(sMsg);
		}
		
	}
	function SendMsg(ss)
	{
	    var url = "https://api.github.com/repos/jeremyjia/Games/issues/comments/526806470?access_token="+getToken();	
        var myMsg=allMsg;
		if(myMsg!=""){
			myMsg+="\n";
		}
		myMsg+=ss;
		var data= {
		"body": myMsg
		};
		
		myAjaxCmd('PATCH',url, data, function(res) {         
           if (res.readyState == 4) {            
              if (res.status != 200) {
				alert("Write:"+ res.status);
             }
           }
        });
	}
		
	function readMsg() 
	{
		var url = "https://api.github.com/repos/jeremyjia/Games/issues/comments/526806470?access_token="+getToken();
		myAjaxCmd('GET',url, null, readCallBack);
	
        function readCallBack(resp){
			if(resp.readyState == 4){
			  if(resp.status==200){
				  var msg = JSON.parse(resp.responseText);
				  if(msg.body==null || msg.body==""){
					allMsg ="";
				  }else allMsg=msg.body;
			  }else{
				alert("The status code:"+resp.status);
				clearInterval(timerId); 
			  }
		    }			 
         }
	}
	
	function getToken(){		        
		return "f89b0eccf7"+"4c65a65513"+"60062c3e47"+"98d0df4577";
	}
	
	//This is a common method used for sending or receving information from Github
	function myAjaxCmd(method, url, data, callback){
		var xmlHttpReg = null;
		if (window.XMLHttpRequest){
		  xmlHttpReg = new XMLHttpRequest();
		}else{
		  xmlHttpReg = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlHttpReg.onreadystatechange = function (){
	      callback(xmlHttpReg);
		};
		xmlHttpReg.open(method, url, true);
		if(method == "PATCH" || method == "POST"){
			xmlHttpReg.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xmlHttpReg.send(JSON.stringify(data));
		}else if(method == "GET"){
			xmlHttpReg.setRequestHeader('If-Modified-Since', '0');
			xmlHttpReg.send(null);
		}
	}
}
_on_off_div(this,md);

   