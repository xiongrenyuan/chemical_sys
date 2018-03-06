$(function(){
	var flag;
	var flag1 = flag2 = 0;
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

