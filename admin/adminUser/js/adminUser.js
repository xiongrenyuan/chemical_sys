require.config({
	baseUrl: '../../all/',
	paths: {
		jquery: "js/jquery-3.2.1.min",
	}
});
define(function(require, exports, module) {
	var $ = require('jquery');
	getdata();
		$(".sys").on("tap",function(){
        getdata();

	})
    $(document).on("tap",".operate",function(){
    	var userid_d = $(this).parent().attr('item');
    	$.ajax({
    		type:"post",
    		url:'http://192.168.10.219:8080/bysj/user',	
//  		url:"http://localhost:8080/bysj/user",
    		async:false,
	    	data:{"type": "deleteuser","userid":userid_d},
	    	success:function(){
	    		location.reload();
	    	},
	    	error:function(err){
	    		console.log(err);
	    	}
    		
    	});
    })
	
	


})
function getdata(){
		$(".list").empty();
		
	    	$.ajax({
	    		type:"post",
	    		url:'http://192.168.10.219:8080/bysj/user',	
//	    		url:"http://localhost:8080/bysj/user",
	    		cache:false,
	    		dataType:"json",
	    		data:{"type": "userlist"},
	    		success:function(data){
	    			var num = data.length;
	    			$(".pagemiddle").empty();
					$(".pagemiddle").append(
						'<span class="title">用户总人数:</span> '+						           
						'<span class="num">' + num + '</span><span class="des">人</span>'
					)	    			
	    			var user_name = $("#input_name").val();
	    			if(!user_name){
	    				for(var i =0;i< data.length;i++){
							var id = data[i].USERID;
							var name = data[i].NAME;
							var phone = data[i].SJHM;
	    				$(".list").append(
							'<div class="list_item clearfix" item="'+ id+ '"> ' +
							'<div class="name">' + name + '</div>' +
							'<div class="number">' + phone + '</div>' +
							'<div class="operate">' +
							'<img src="img/delete.png" />' + '</div>'
	    				);
	    				}
	    			}
	    			else{
	    				//清除空格
	    				for(var i =0;i<data.length;i++){
	    					if(data[i].NAME.indexOf(user_name)!= -1){
								var id = data[i].USERID;
								var name = data[i].NAME;
								var phone = data[i].SJHM;
		    				$(".list").append(
								'<div class="list_item clearfix" item="'+ id+ '"> ' +
								'<div class="name">' + name + '</div>' +
								'<div class="number">' + phone + '</div>' +
								'<div class="operate">' +
								'<img src="img/delete.png" />' + '</div>'
		    				);
	    					}
	    				}

	    			}
	    	
	    		},
	    		error:function(){
	    			console.log("获取药品名称数据失败");
	    		}
	    	});	
}
