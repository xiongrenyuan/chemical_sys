var flag1 = flag2 = flag3 = flag4 = flag5 = 0;
var flag;
$(function(){
	$("#name").on("input propertychange focus",function(){
		var name = $("#name").val();
		var l = $("#name").val().length;
		if(CheckStr(name)== false){
		$(".msg_con").text("昵称中含有非法字符");	
		$(".msg").css("background-color","#d81e06");
		flag1 = 0;
		}
		else if(l == 0){
			$(".msg_con").text("5-10位字符，不能含有非法字符，推荐中文");	
			$(".msg").css("background-color","#F98241");
			flag1 = 0;
		}
		else if(l <3){	
			$(".msg_con").text("昵称长度太短");
			$(".msg").css("background-color","#d81e06");
			flag1 = 0;
		}
		else if(l>10){
			  $(".msg_con").text("昵称长度太长");
			  $(".msg").css("background-color","#d81e06");
			  flag1 = 0;
		}
		else{
			$(".msg_con").text("恭喜您，昵称正确");
			$(".msg").css("background-color","#56DB9D ");		
			flag1 = 1;
			
		}
	} )

$("#phone").on("input propertychange focus",function(){
	var phone = $("#phone").val();
	var l = phone.length;
	if(l == 0){
		$(".msg_con").text("手机号码不能为空");
		$(".msg").css("background-color","#F98241");
		
		flag2 = 0;
	}
	else if(!phone.match(/^(((13[0-9]{1})|159|153)+\d{8})$/)){
		$(".msg_con").text("手机号码不正确");
		$(".msg").css("background-color","#d81e06");
		flag2=0;
	}
	else{
		$(".msg_con").text("恭喜您，手机号码正确");
		$(".msg").css("background-color","#56DB9D ");	
		flag2 = 1;
	}
})
$("#pw").on("input propertychange focus",function(){
	var pw = $("#pw").val();
	var l = pw.length;
	//密码为八位及以上并且字母数字特殊字符三项都包括,密码强度为强
	var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
	//密码为七位及以上并且字母、数字、特殊字符三项中有两项，强度是中等  
    var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{6,}).*", "g");

	    if(l == 0){
			$(".msg_con").text("6-15位字符，由字母（区分大小写）、数字和符号组成");	
			$(".msg").css("background-color","#F98241");
			flag3 = 0;
		}
		else if(false == enoughRegex.test(pw)){	
			$(".msg_con").text("密码长度太短");
			$(".msg").css("background-color","#d81e06");
			flag3 = 0 ;
		}
		else if(l>15){
			  $(".msg_con").text("密码长度太长");
			  $(".msg").css("background-color","#d81e06");
			  flag3 = 0;
		}
		else if(strongRegex.test(pw)){
			  $(".msg_con").text("恭喜您，密码轻度为：强");
			  $(".msg").css("background-color","#56DB9D ");
			  flag3 = 1;
		}
		else if(mediumRegex.test(pw)){
			  $(".msg_con").text("恭喜您，密码轻度为：中");
			  $(".msg").css("background-color","#56DB9D ");
			  flag3 = 1;
		}
		else{
			 $(".msg_con").text("请注意，密码轻度为：弱");
			 $(".msg").css("background-color","#F98241");
			 flag3 = 1;
		}
})
$("#right_pw").on("input propertychange focus",function(){
	  var pw = $("#pw").val();
	  var right_pw =$("#right_pw").val();
	  if(pw.length == 0){
	  	$(".msg_con").text("请先设置密码，再确认密码");
	  	$(".msg").css("background-color","#F98241");
	  	flag4 = 0;
	  }
	  else if(right_pw == pw){
	  	$(".msg_con").text("恭喜您，设置密码成功");
	  	$(".msg").css("background-color","#56DB9D ");
	  	flag4 = 1;
	  }
	  else{
	  	$(".msg_con").text("请输入相同的密码");
	  	$(".msg").css("background-color","#d81e06");
	  	flag4 = 0;
	  }
	
})
 setInterval(createCode,30000);
 createCode();
 checkCode();
 $(".subBtn").click(function(){
 	register();
 })
 $("#code , #code_img").click(function(){
 	createCode();
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
function createCode(){
	flag5 = 0;
    var code = "";
    var codeLength = 4;//验证码的长度  
    var rightCode = $("#code");
    var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',  
                'S','T','U','V','W','X','Y','Z');//随机数  
        for(var i = 0; i < codeLength; i++) {//循环操作  
    var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）  
         code += random[index];//根据索引取得随机数加到code上  
        }
        rightCode.val(code);
        }
function checkCode(){
    $("#inputcode").on("input propertychange focus",function(){
    var inputcode = $("#inputcode").val();
    var l = inputcode.length;
    var rightcode = $("#code").val();
        if(l == 0){
            $(".msg_con").text("请在30s内填写图片中的验证码");
            $(".msg").css("background-color","#F98241");
             flag5 = 0;
        	}
        else if(inputcode.toLowerCase() == rightcode.toLowerCase()){
        	$(".msg_con").text("验证码正确");
        	$(".msg").css("background-color","#56DB9D ");
        	flag5 = 1;
        	}
        else if( l==4 && inputcode!= rightcode){      				
        	$(".msg_con").text("验证码错误,已为您自动刷新");
        	$(".msg").css("background-color","#d81e06");
        	flag5 = 0;
        	createCode();
            }
           })	
}
//注册
function register() {
	flag = flag1*flag2*flag3*flag4*flag5;
	if(flag1 == 0){
		$(".msg_con").text("昵称格式错误！！！");
		$(".msg").css("background-color","#d81e06");
		return;
	}
	else if(flag2 == 0){
		$(".msg_con").text("电话号码错误！！！");
		$(".msg").css("background-color","#d81e06");
		return;
	}
	else if(flag3 == 0){
		$(".msg_con").text("输入密码格式错误！！！");
		$(".msg").css("background-color","#d81e06");
		return;
	}
	else if(flag4 == 0){
		$(".msg_con").text("确认密码格式错误！！！");
		$(".msg").css("background-color","#d81e06");
		return;
	}
	else if(flag5 == 0){
		$(".msg_con").text("验证码格式错误！！！");
		$(".msg").css("background-color","#d81e06");
		return;
	}
	var name = $.trim($('#name').val());
	var phone = $.trim($('#phone').val());
	var password = $.trim($('#pw').val());
    if(!name){
		$(".msg_con").text("请填写请输入昵称");
	    $(".msg").css("background-color","#F98241");
		return;
	}			
	if(!phone){
	    $(".msg_con").text("请填写手机号");
		$(".msg").css("background-color","#F98241");
	    return;
	}
	if(!password) {
	    $(".msg_con").text("请先填写密码");
		$(".msg").css("background-color","#F98241");
		return;
		}
	if(flag == 1){
		$.ajax({
			        url:'http://192.168.10.219:8080/bysj/register',	
//					url:'http://localhost:8080/bysj/register',
					data: {"name": name, "password": password,"phone":phone},
					cache: false,
					type : 'POST',
					success: function(data){
						data = $.trim(data);
						if(data.indexOf("err_")>=0){
							$(".msg_con").text(data.substring(4));
							$(".msg").css("background-color","#F98241");
						} else {   //成功，调整普通用户主页面
							$(".msg_con").text("恭喜您，注册成功！！！请登录使用");
							window.location.href = "index.html"; 
						} 
					},
					error:function(){
						$(".msg_con").text("注册异常！");
						$(".msg").css("background-color","#F98241");
					}
				});
	}
}