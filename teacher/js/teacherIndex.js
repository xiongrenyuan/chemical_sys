$(function(){
	$(".right").on("click",function(){
		if($(".header_info").css("display")=="none"){
			$(".header_info").show();
		}else{
			$(".header_info").hide();
	   }
		})
	var userid = localStorage.getItem("userid");
	$(".login_out").on("click",function(){
		localStorage.removeItem("userid");
		console.log(localStorage.getItem("userid"));
	})
	
	
})
