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
	var mui = require('mui');
	var ypid = "";
	require('picker');
	require('moment');
	
//这是品名搜索模块
    //点击输入品名，弹出搜索栏
    $(".pcnum").on("tap",function(){
    	$("#info_text").text("请填写信息以完成入库登记！！！");    	
    	$(".cover").addClass("movecover");
    	$("#input_pc").val("");
    	$(".pc_list").empty();
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
		$("#search_name").html(con_name);
		//显示化学药品的详细信息
		$.ajax({
			type:"post",
			url:'http://192.168.10.219:8080/bysj/yp',	
//			url:"http://localhost:8080/bysj/yp",
			cache:false,
			dataType:"json",
			data:{"type":"ypinfo","ypid":con_index},			
			success:function(data){
				console.log("获取药品详情数据成功");
				console.log(data);
				$(".type").text(data.LX);
				$(".kide").text(data.YPFL);
				$(".stocknum").text(data.KC);
			 
			},
			error:function(){
				console.log("获取药品详情数据失败");
			}
			
		});
		//进行提交
		$("#sum_btn").on("tap",function(){
			var userid = localStorage.getItem("userid_admin");
			var ypid = con_index;
            var gqsj = $(".etime").text();
            var gh = $(".pr option:checked").text();
            var sl = $(".out_num").val();
            if(sl==""){
            	$("#info_text").text("请填写入库数量才能提交！！！");
            	return;
            }    
        
			$.ajax({
				type:"post",
				url:'http://192.168.10.219:8080/bysj/yp',	
//				url:"http://localhost:8080/bysj/yp",
				cache:false,
				datatype:"json",
				data:{"type":"rk","userid":userid,"ypid":ypid,"gqsj":gqsj,"gh":gh,"sl":sl},
				success:function(data){
					$("#info_text").text("恭喜您入库成功！！！");
					console.log(data);
					setInterval(function(){
						window.location.href="../adminIndex.html";
					},1000);
					
				},
				error:function(){
					console.log("药品入库失败");
				}
			});
		})
		
	})
//这是时间选择器模块
	//设置过期时间的默认值
    var etime = moment(new Date().getTime()).format("YYYY-MM-DD");
    var now = moment(new Date().getTime());
    $(".etime").text(etime);
    //选择过期时间
        (function () {
            var btns = mui('.timeimg');
            btns.each(function (i, btn) {
                btn.addEventListener('tap', function () {
                    var optionsJson = this.getAttribute('data-options') || '{}';
                    var options = JSON.parse(optionsJson);
                    var picker = new mui.DtPicker({
                        type: "date", //设置日历初始视图模式
                        beginYear: 2016, //设置开始年
                        endYear: new Date().getFullYear() + 5, //设置结束年
                        labels: ['年', '月', '日'] //设置默认标签区域提示语
                    })
                    picker.setSelectedValue(etime);
                    picker.show(function (rs) {

                        if(new Date(rs.text).getTime() >= now){
                            etime = rs.text
                            $(".etime").text(etime);
                        }
                        picker.dispose();
                    });
                }, false);
            });
        })() 
        
 //这是选择柜台号后的事件       
    
      $('select').on("tap",function(){
      	$('select').attr("style","background: url('img/select-new.png') no-repeat right/25%");
      })
        $('select').on("change blur ",function(){
      	$('select').attr("style","background:url('img/select.png') no-repeat right/15%");
    
    })

})