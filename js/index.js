$(function(){
	//提示信息
	
	
	var flag;
	var flag1 = flag2 = 0;	
	//初始flag1=flag2=0;用户登录失败，当flag1=flag2=1时，登录信息正确 
	$("#exit_name").on("input propertychange focus", function() {
		var name = $("#exit_name").val();
		if(name == ""){
		  $(".msg_con").text("请先填写用户名");
		  $(".msg").css("background-color","#F98241");
		  flag1 = 0;
		}
		else{		  
		  if(CheckStr(name)== false){
		   $(".msg_con").text("用户名中含有非法字符");
		   $(".msg").css("background-color","#d81e06");
		   flag1 = 0;
		}
		  else{
//缺少用户是否存在判断，若用户不存在，提示用户注册
		  	 $(".msg_con").text("欢迎登录，"+name);
		  	 $(".msg").css("background-color","#56DB9D");
		  	 flag1 = 1;
		  }
		 
		}
	})
	$("#exit_name").blur(function(){
		var name = $("#exit_name").val();
		if(name == ""){
			$(".msg_con").text("用户名不能为空");
			$(".msg").css("background-color","#F98241");
			flag1 = 0;
		}
		
		
	})
	$("#exit_pw").on("input propertychange focus",function(){
		
		var pw = $("#exit_pw").val();
		var name = $("#exit_name").val();
		if(name == ""){
			$(".msg_con").text("请先填写用户名");
			$(".msg").css("background-color","#F98241");
			flag1 = 0; 
		}
		//缺少名字与密码是否匹配判断,若不匹配，提示用户输入正确的密码
	})
	$("#exit_pw").blur(function(){
		var pw = $("#exit_pw").val();
		if(pw == ""){
			$(".msg_con").text("请填写用户密码");
			$(".msg").css("background-color","#F98241");
			flag2 = 0;
		}
	})

//cookie


//设置cookie存储路径
    var webfilePath = window.location.pathname;
    var cookiebasePath = '/' + webfilePath.split('/')[1]; 

//cookie存储
    $(".subBtn").click(function(){
    	var number = 0;
    	if( flag1 == 1 && flag2 == 1){
    		var name = $("#exit_name").val();
    		var pw = $("#exit_pw").val();
    		$.cookie('test','name pw',{'path':cookiebasePath});
    		var userMsg = cookieValToJson($.cookie('test'));
    		console.log(userMsg);
    	}
          
       })

})
//判断字符串是否含有非法字符
function CheckStr(str){
    var regx=/['"#$%&\^*》>,."<《？，。！@#￥%……’”：/；]/;
      rs=regx.exec(str);
      if(rs!=null)
      {
         return false;
      }
      else
      {
         return true ;
      }
   }


//  将cookie转为json对象

function cookieValToJson (cookieVal) {
    var re = {};
    if (!cookieVal || cookieVal == 'null' || typeof(cookieVal) == 'undefinded' || cookieVal == '') 
    {
        return null;
    }
    else{
            var carr = cookieVal.split(',');
            for(var i = 0; i < carr.length; i++)
            {
            	var node = carr[i];
            	var keyArr = node.split('=');
            	var keyName = keyArr[0],keyVal = keyArr[1];
            	re[keyName] = keyVal;
            };
        }
        return re;
}