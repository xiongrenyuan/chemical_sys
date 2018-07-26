$(function(){
	//提示信息
	var flag;
	var flag1 = flag2 = 0;	
	//初始flag1=flag2=0;用户登录失败，当flag1=flag2=1时，登录信息正确 
	$("#exit_name").on("input propertychange focus", function() {
		var name = $("#exit_name").val();
		if(name == ""){
		  $(".msg_con").text("请填写用户名");
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
		  	 var pw = $("#exit_pw").val();
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
		if(pw == ""){
			$(".msg_con").text("请输入密码");
			$(".msg").css("background-color","#F98241");
			flag2 = 0;
		}
		//缺少名字与密码是否匹配判断,若不匹配，提示用户输入正确的密码
		else{
			 flag2 = 1;
			 $(".msg_con").text("欢迎登录，"+name);
			 $(".msg").css("background-color","#56DB9D");
		}
	})
	$("#exit_pw").blur(function(){
		var pw = $("#exit_pw").val();
		if(pw == ""){
			$(".msg_con").text("请填写用户密码");
			$(".msg").css("background-color","#F98241");
			flag2 = 0;
		}
	})
	$(".subBtn").click(function(){
		login();
	});


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
function login() {
	var name = $.trim($('#exit_name').val());
	var password = $.trim($('#exit_pw').val());
		if(!name) {
			$(".msg_con").text("请先填写用户名");
			$(".msg").css("background-color","#F98241");	
			return;
		}	
		if(!password) {
			$(".msg_con").text("请先填写密码");
			$(".msg").css("background-color","#F98241");
			return;
		}			
		$.ajax({

			url:'http://192.168.10.219:8080/bysj/login',
//			url:'http://localhost:8080/bysj/login',
			data: {"name": name, "password": password},
			cache: false,
			type : 'post',
			success: function(data){
						data = $.trim(data);
						if(data.indexOf("err_")>=0){
							$(".msg_con").text(data.substring(4));
							$(".msg").css("background-color","#F98241");
						} else if(data.indexOf("1") == 0){   //普通用户
							$(".msg_con").text("登陆成功");
							localStorage.setItem("userid_user",data.substring(1));
							window.location.href='teacher/teacherIndex.html?userid='+ localStorage.getItem("userid_user");
						} else if(data.indexOf("2") == 0) {   //管理员
							$(".msg_con").text("登陆成功");
							localStorage.setItem("userid_admin",data.substring(1));
							window.location.href='admin/adminIndex.html?userid='+ localStorage.getItem("userid_admin");
						}
					},
					error:function(){
						$(".msg_con").text("登录异常！");
						$(".msg").css("background-color","#F98241");
					}
				});
		
}