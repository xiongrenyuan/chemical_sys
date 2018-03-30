require.config({
	baseUrl:'../../all/',
	paths:{
		jquery:"js/jquery-3.2.1.min",
	},
	shim:{
		'picker':{
			deps:["mui"]
		}
	}	
});
define(function(require, exports, module) {
    var $ = require('jquery');
    var userid = localStorage.getItem("userid");
    var return_num = 0;
    	$.ajax({
    		type:"post",
    		url:"http://localhost:8080/bysj/yp",
    		cache:false,
    		async:false,
    		dataType:"json",
    		data:{"type":"getypghlist","userid":userid},
    		success:function(data){
    			console.log(userid);
    			console.log(data);
//  			$.each(data, function(i,item) {
//  				console.log(item.DRUGSID);
//  				console.log(item.YPMC);
//  				$(".search_list").append('<li class="search_li"><span style="display:none">'+item.DRUGSID+'</span class="li_name"><span>'+ item.YPMC +'</span></li>');
//  				
//  			});
    		},
    		error:function(err){
    			console.log("获取药品归还列表数据失败");
    			console.log(err);
    		}
    	});
    	
      	//归还
      	
    $("#content_container").on("tap", ".btn-bgcolor", function() {
        var borrow_id = $(this).parents(".back-row").attr("id");
        mui.prompt('', '请输入归还数量', '确认归还', ['取消', '确认'], function(e) {
            document.querySelector('.mui-popup-input input').type = 'number';
            
            //确定按钮
            if(e.index == 1) {
                var amount = document.querySelector('.mui-popup-input input').value;
                var param = {};
                param.amount = amount;
                console.log(param.amount);
                return_num = param.amount;
//              $.ajax({
//              	type:"post",
//              	url:"http://localhost:8080/bysj/yp",
//              	async:false,
//              	data:{
//              		"type":ypgh,
//              		"ypid":    ,
//              		"crkid":   ,
//              		"lx":1,
//              		"ghsl":param.amount,
//              		
//              	},
//              	success:function(data){
//              		console.log("成功归还");
//              		console.log(data);
//              	},
//              	error:function(err){
//              		console.log("归还失败");
//              		console.log(err);
//              		
//              	}
//              });
                
                
                
                
            }
            //取消按钮
            if(e.index == 0) {
                var amount = document.querySelector('.mui-popup-input input').value;
                var param = {};
                param.amount = amount;
                console.log(param)
            }            
            
            
        }, 'div')
    })
    //无需归还
    $("#content_container").on("tap", ".btn-normal", function() {
//      var borrow_id = $(this).parents(".back-row").attr("id");
        mui.confirm('', '无需归还', ['取消', '确认'], function(e) {
            
            //确认按钮
            
            if(e.index == 1) {
                var param = {};
//              param.borrow_id = borrow_id;
                param.amount = 0;
                console.log(param);
//               $.ajax({
//              	type:"post",
//              	url:"http://localhost:8080/bysj/yp",
//              	async:false,
//              	data:{
//              		"type":ypgh,
//              		"ypid":    ,
//              		"crkid":   ,
//              		"lx":2,
//              		"ghsl":param.amount,
//              		
//              	},
//              	success:function(data){
//              		console.log("成功------无需归还");
//              		console.log(data);
//              	},
//              	error:function(err){
//              		console.log("失败-----无需归还");
//              		console.log(err);
//              		
//              	}
//              });               
                
    
            }
            //取消按钮
            if(e.index ==0){
                 var param = {};
//              param.borrow_id = borrow_id;
                param.amount = 0;
                console.log(param);           	
            }
        }, 'div')
    })   	
    	
    	
    	

  

})