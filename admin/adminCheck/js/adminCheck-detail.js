$(function(){
	//获取药品的id
	var r = window.location.search;
    r = r.substring(r.indexOf("?")+1,r.length);
       //显示化学药品的详细信息
		$.ajax({
			type:"post",
			url:'http://192.168.10.219:8080/bysj/yp',
//			url:"http://localhost:8080/bysj/yp",
			cache:false,
			dataType:"json",
			data:{"type":"ypinfo","ypid":r},			
			success:function(data){
				console.log("获取药品详情数据成功");
                var name = data.YPMC;
                var type = data.LX;
                var fl = data.YPFL;
                var number = data.KC;	
                $(".name").text(name);
                $(".lx").text(type);
                $(".FL").text(fl);
                $(".kc_content").text(number+"ml");

                
                
			},
			error:function(){
				console.log("获取药品详情数据失败");
			}
			
		});
                
         $.ajax({
				type:"post",
			    url:'http://192.168.10.219:8080/bysj/yp',				
//				url:"http://localhost:8080/bysj/yp",
				cache:false,
				dataType:"json",
				data:{"type":"getcrklist","ypid":r},			
				success:function(data){
						console.log("获取操作列表详情成功"); 
						for(var i =0 ;i <data.length;i++){
							console.log(i);
							var time = data[i].CZSJ;			
							var user= data[i].NAME;
							var lx = data[i].LX;
							var number = data[i].SL;
							var kc = data[i].KC;
							var sfgh = data[i].SFGH;
							var return_num = data[i].GHSL;
							console.log(return_num);
						    if(lx == "入库" ){
						    $(".list").append(
	    					'<div class="list_item clearfix">' + 
	    					'<div class="time">'+ time +'</div>'+
	    					'<div class="persion">'+ user+'</div>'+
	    					'<div class="number">' +number+"ml"+'</div>'+
	    					'<div class="remain">管理员入库</div>'+
	    					'</div>'
	    				    );						    	
						    }
						    else if(lx == "出库待批准"||lx == "用户待归还"){
						    $(".list").append(
	    					'<div class="list_item clearfix">' + 
	    					'<div class="time">'+ time +'</div>'+
	    					'<div class="persion">'+ user +'</div>'+
	    					'<div class="number">'+ return_num+ "ml"+'</div>'+
	    					'<div class="remain">'+ lx+'</div>'+
	    					'</div>'
	    				    );						    	

						}else{
							 $(".list").append(
	    					'<div class="list_item clearfix">' + 
	    					'<div class="time">'+ time +'</div>'+
	    					'<div class="persion">'+ user +'</div>'+
	    					'<div class="number">'+ return_num + "ml"+'</div>'+
	    					'<div class="remain">'+ lx+'</div>'+
	    					'</div>'
	    				    );
						}
				}
						},
				error:function(err){
					console.log("获取操作列表详情失败");
					console.log(err);
				}
				})		
})