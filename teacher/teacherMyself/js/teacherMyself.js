$(function(){
		var userid = localStorage.getItem("userid");
	$.ajax({
    		type:"post",
    		url:"http://localhost:8080/bysj/yp",
    		cache:false,
    		dataType:"json",
    		data:{
    			"type":"myly",
    			"userid":userid
    			},
    		success:function(data){
    			console.log(data);
//  			$.each(data, function(i,item) {
//  				console.log(item.DRUGSID);
//  				console.log(item.YPMC);
//  				$(".search_list").append('<li class="search_li"><span style="display:none">'+item.DRUGSID+'</span class="li_name"><span>'+ item.YPMC +'</span></li>');
//  				
//  			});
    		},
    		error:function(){
    			console.log("获取药品名称数据失败");
    		}		
	})
})

