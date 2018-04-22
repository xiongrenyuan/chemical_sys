$(function(){
      add_A();
		//库存查询
	$(".pagetop_left").click(function(){
		$(".pagetop_left").addClass("active");
		$(".pagetop_right").removeClass("active");	
		add_A();
	})
	//过期查询
	$(".pagetop_right").click(function(){
		$(".pagetop_right").addClass("active");
		$(".pagetop_left").removeClass("active");
		
		add_B();

	})
})
function add_A(){
	$(".page_con").empty();
			$.ajax({
			type:"post",
			url:"http://localhost:8080/bysj/yp",
			async:true,
			dataType:"json",
			data:{
				"type":"getyjlist",
				"lx":1
			},
			success:function(data){
				
				console.log("库存查询成功");
			  console.log(data);
				for(var i = 0;i<data.length;i++){
					var name = data[i].YPMC;
					var ypfl = data[i].YPFL;
					var number = data[i].KC;
					var gh = data[i].GH.slice(0,-1).replace(/,,/g," 、");
					
					$(".page_con").append('<div class="con_line">'+
		    		'<ul>'+
				        '<li><span class="li_title_a">'+name+'</span><span class="li_title_b">'+ ypfl+'</span></li>'+
				        '<li><span class="li_one">库存数量</span><span class="li_two">'+ number +'ML</span></li>'+
				        '<li><span class="li_one">位置信息</span><span class="li_two">'+ gh +'号柜</span></li>'+
			        '</ul>'+
			       '<footer>'+
				        '<span class="info">库存过低</span>'+
			       '</footer>'+
		    	'</div>');
		}
			},
			error:function(err){
				console.log(err);
			}
		});			
}
function add_B(){
	$(".page_con").empty();	
			$.ajax({
			type:"post",
			url:"http://localhost:8080/bysj/yp",
			async:true,
		    dataType:"json",
			data:{
				"type":"getyjlist",
				"lx":2
			},
			success:function(data){
				console.log("过期预警成功");
				console.log(data);
				for(var i = 0;i<data.length;i++){
					var name = data[i].YPMC;
					var ypfl = data[i].YPFL;
					var number = data[i].KC;
					var gh = data[i].GH.slice(0,-1).replace(/,,/g," 、");
					
					$(".page_con").append('<div class="con_line">'+
		    		'<ul>'+
				        '<li><span class="li_title_a">'+name+'</span><span class="li_title_b">'+ ypfl+'</span></li>'+
				        '<li><span class="li_one">库存数量</span><span class="li_two">'+ number +'ML</span></li>'+
				        '<li><span class="li_one">位置信息</span><span class="li_two">'+ gh +'号柜</span></li>'+
			        '</ul>'+
			       '<footer>'+
				        '<span class="info">快要过期</span>'+
			       '</footer>'+
		    	'</div>');				
			}
			},
			error:function(err){
				console.log("err");
				console.log(err);
			}
		});
	
	
	
}
