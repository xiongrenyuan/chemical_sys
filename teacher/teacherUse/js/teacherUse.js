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
	 
	 var kc_check = null;
	 
	 var setpicker = function(pickerdom, pickerdata) {
        var picker = new mui.PopPicker();
        picker.setData(pickerdata);
        picker.show(function(selectItems) {
            console.log("selectItems", selectItems);
            $(pickerdom).val(selectItems[0].text);
            picker.dispose();
        })
    }
//这是品名搜索模块
    //点击输入品名，弹出搜索栏
    $("#input_name,#search_btn").on("tap",function(){
    	$("#info_text").text("请填写信息以完成入库登记！！！");    	
    	$(".cover").addClass("movecover");
    	$("#input_name").val("");
    	$(".search_list").empty();
    	//显示所有的化学药品
    	$.ajax({
    		type:"post",
			url:'http://192.168.10.219:8080/bysj/yp',	
//  		url:"http://localhost:8080/bysj/yp",
    		cache:false,
    		dataType:"json",
    		data:{"type":"yplist"},
    		success:function(data){
    			console.log(data);
    			$.each(data, function(i,item) {
    				console.log(item.DRUGSID);
    				console.log(item.YPMC);
    				$(".search_list").append('<li class="search_li"><span style="display:none">'+item.DRUGSID+'</span class="li_name"><span>'+ item.YPMC +'</span></li>');
    				
    			});
    		},
    		error:function(){
    			console.log("获取药品名称数据失败");
    		}
    	});
    })
    //取消搜索栏，关闭遮罩层
	$(".cancel").on("tap", function () {
        $(".cover").removeClass("movecover");
    })
	//点击li，关闭遮罩层
	$(".search_list" ).on("tap","li",function(){		
		$(".cover").removeClass("movecover");
	   var con_name = $(this).find("span:last").text();
	   var con_index = $(this).find("span:first").text();
		
		$("#input_name").val(con_name);
		//显示化学药品的详细信息
		$.ajax({
			type:"post",
			url:'http://192.168.10.219:8080/bysj/yp',	
//			url:"http://localhost:8080/bysj/yp",
			cache:false,
			dataType:"json",
			data:{"type":"ypinfo","ypid":con_index},			
			success:function(data){
				kc_check = data.KC;
				console.log("获取药品详情数据成功");
				console.log(data);
				$(".type").text(data.LX);
				$(".kide").text(data.YPFL);
				$(".stocknum").text(data.KC+"ml");
			 
			},
			error:function(){
				console.log("获取药品详情数据失败");
			}
			
		});
		//进行提交
		$("#sum_btn").on("tap",function(){
			var userid = localStorage.getItem("userid_user");
			var ypid = con_index;
            var sl = $("#input_num").val();
            var yt = $("#input_use").val();
            var beiz = $("#beizhu").val();
            console.log(userid);
            console.log(ypid);
            console.log(sl);
            console.log(yt);
            console.log(beiz);
            if($("#input_name").val()== ""){
            	$("#info_text").text("请填写出库数量才能提交！！！");
            	return;
            }
            if(sl==""){
            	$("#info_text").text("请填写出库数量才能提交！！！");
            	return;
            }    
            
            if(sl > kc_check){
                $("#info_text").text("出库数量超出已有化学药品数量！！！");
            	return;           	
            }
 
        
			$.ajax({
				type:"post",
			    url:'http://192.168.10.219:8080/bysj/yp',	
//				url:"http://localhost:8080/bysj/yp",
				cache:false,
				datatype:"json",
				data:{"type":"cksq","userid":userid,"ypid":ypid,"sl":sl,"yt":yt,"beiz":beiz},
				success:function(data){
					$("#info_text").text("恭喜您出库申请成功！！！");
					console.log(data);
					setInterval(function(){
						window.location.href="../teacherIndex.html";
					},1000);
					
				},
				error:function(){
					console.log("药品出库失败");
				}
			});
		})
		
	})

    $("#use").on("tap", function(e) {
        e.preventDefault();
        var _this = this;
        var options = [{
                value: "0",
                text: "演示实验"
            },
            {
                value: "1",
                text: "学生实验"
            }
        ];
        var pickerdom = $("#input_use");
        if(options.length > 0) {
            setpicker(pickerdom, options)
        }
    });
	
})