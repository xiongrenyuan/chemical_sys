$(function(){
	//获取药品的id
	var r = window.location.search;
    r = r.substring(r.indexOf("?")+1,r.length);
       //显示化学药品的详细信息
		$.ajax({
			type:"post",
			url:"http://localhost:8080/bysj/yp",
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
				url:"http://localhost:8080/bysj/yp",
				cache:false,
				dataType:"json",
				data:{"type":"getcrklist","ypid":r},			
				success:function(data){
						console.log("获取操作列表详情成功"); 
						for(var i =0 ;i <data.length;i++){
							console.log(i);
							var time = data[i].CZSJ;			
						    var new_time = time.substring(0,4)+"-"+time.substring(4,6)+"-"+time.substring(6);
							console.log(new_time);
							var userid = data[i].USERID;
							var lx = data[i].LX;
							var number = data[i].SL;
							var kc = data[i].KC;
						    if(lx == "入库"){
						    $(".list").append(
	    					'<div class="list_item clearfix">' + 
	    					'<div class="time">'+ new_time +'</div>'+
	    					'<div class="persion">'+ "111"+'</div>'+
	    					'<div class="number">'+"+" +number+"ml"+'</div>'+
	    					'<div class="remain">'+ kc+"ml"+'</div>'+
	    					'</div>'
	    				    );						    	
						    }
						    if(lx == "出库"){
						    $(".list").append(
	    					'<div class="list_item clearfix">' + 
	    					'<div class="time">'+ new_time +'</div>'+
	    					'<div class="persion">'+ "111"+'</div>'+
	    					'<div class="number">'+"+" +number+ "ml"+'</div>'+
	    					'<div class="remain">'+ kc+"ml"+'</div>'+
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