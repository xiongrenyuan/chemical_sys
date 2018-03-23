$(function(){
	$("#sum_btn").click(function(){
		localStorage.removeItem("userid");
		window.location.href ='../index.html';
	})
})