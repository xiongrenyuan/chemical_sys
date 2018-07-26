$(function(){
	$("#sum_btn").click(function(){
		localStorage.removeItem("userid_admin");
		window.location.href ='../index.html';
	})
})