require.config({
	baseUrl:'../../all/',
	paths:{
		jquery:"js/jquery-3.2.1.min",
		mui:"mui/js/mui.min",
		//选择列表插件
		picker:"mui/js/mui.picker.min",
		//时间控件
		moment:"js/moment.min"
	},
	shim:{
		'picker':{
			deps:["mui"]
		}
	}	
});
define(function(require,exports,module){
	var $ = require('jquery');

	$(".sys").on("tap",function(){
		$(".list").empty();
	    	$.ajax({
	    		type:"post",
	    		url:"http://localhost:8080/bysj/yp",
	    		cache:false,
	    		dataType:"json",
	    		data:{"type":"yplist","ypmc":null},
	    		success:function(data){
	    			var flag = 0;
	    			var ypmc = $("#input_name").val();
	    			if(!ypmc){
	    				for(var i =0;i< data.length;i++){
	    				var j = i+1;
	    				var id = data[i].DRUGSID;
	    				var name = data[i].YPMC;
	    				var type = data[i].LX;
	    				var num = data[i].KC;
	    				$(".list").append(
	    					'<div class="list_item clearfix">' + 
	    					'<div class="pc_id">'+ j +'</div>'+
	    					'<div class="more" fid="'+id+'">'+ name+'</div>'+
	    					'<div class="yp_type">'+ type+'</div>'+
	    					'<div class="yp_kc">'+ num+'</div>'+
	    					'</div>'
	    				);

	    				}
	    				flag +=1;
	    			}
	    			else{
	    				//清除空格
	    				ypmc = ypmc.replace(/\s/g,"");
	    				var j =0;
	    				for(var i =0;i<data.length;i++){
	    					if(data[i].YPMC.indexOf(ypmc)!= -1){
	    						flag += 1;
	    						j++;
	    				    var id = data[i].DRUGSID;
	    				    var name = data[i].YPMC;
		    				var type = data[i].LX;
		    				var num = data[i].KC;
		    				$(".list").append(
		    					'<div class="list_item clearfix">' + 
		    					'<div class="pc_id">'+ j +'</div>'+
		    					'<div class="more" fid="'+id+'">'+ name+'</div>'+
		    					'<div class="yp_type">'+ type+'</div>'+
		    					'<div class="yp_kc">'+ num+'</div>'+
		    					'</div>'
		    				);
	    					}
	    					
	    					else{
	    						flag += 0;
	    					}
	    				}

	    			}
	    			if(flag == 0){
	    					$(".list").append('<span class="info_text">抱歉，没有您搜索的化学药品</span>');
	    				}
	    				else{
	    					$(".list").append('<span class="info_text">您可点击药品名查询详细信息</span>');
	    				}
	    	
	    		},
	    		error:function(){
	    			console.log("获取药品名称数据失败");
	    		}
	    	});
	    $("body").on("tap",".more",function(){
	    	var fid = $(this).attr("fid");
		    window.location.href ="../adminCheck/adminCheck-detail.html?"+fid;
	})

	})

	
})