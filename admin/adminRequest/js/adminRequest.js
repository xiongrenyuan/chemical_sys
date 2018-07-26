require.config({
	baseUrl: '../../all/',
	paths: {
		jquery: "js/jquery-3.2.1.min",
	},
	shim: {
		'picker': {
			deps: ["mui"]
		}
	}
});
define(function(require, exports, module) {
	var $ = require('jquery');

	$(function() {
		getA();
		//出库申请
		$(".pagetop_left").click(function() {
				$(".pagetop_left").addClass("active");
				$(".pagetop_right").removeClass("active");
				getA();
			})
			//归还申请
		$(".pagetop_right").click(function() {
			$(".pagetop_right").addClass("active");
			$(".pagetop_left").removeClass("active");
			getB();

		})

	})
	//同意出库
	$(".ck").on("tap", ".btn-normal", function() {
		console.log("---------1111----------");
		var ck_id = $(this).parents(".back-row").attr("item");
		mui.confirm('', '同意', ['取消', '确认'], function(e) {
			//确认按钮
			if(e.index == 1) {
				console.log("同意1");
				console.log(ck_id);
				$.ajax({
					type:"post",
					url:'http://192.168.10.219:8080/bysj/yp',
//					url:"http://localhost:8080/bysj/yp",
					async:true,
					data:{"type":"commitck","czid":ck_id},
					success:function(data){
						console.log(data);	
						location.reload();						
					},
					error:function(){
						console.log(err);
					}
				});

			}
			//取消按钮
			if(e.index == 0) {
				console.log("取消1");
			}
		}, 'div')
	})
	//同意入库

	$(".rk").on("tap", ".btn-normal", function() {
		var rk_id = $(this).parents(".back-row").attr("itema");
	    var ypid = $(this).parents(".back-row").attr("itemb");
	    var num = $(this).parents(".back-row").attr("itemc")
	    console.log(rk_id);
	    console.log(ypid);
	    console.log(num);
		mui.confirm('', '同意', ['取消', '确认'], function(e) {
			//确认按钮       
			if(e.index == 1) {
				console.log("同意2");
				$.ajax({
					type:"post",
                    url:'http://192.168.10.219:8080/bysj/yp',						
//					url:"http://localhost:8080/bysj/yp",
					async:true,
					data:{
						"type":"commitgh",
						"czid":rk_id,
						"ghsl":num,
						"ypid":ypid
					},
					success:function(data){
						console.log(data);	
						getB();					
					},
					error:function(){
						console.log(err);
					}
				});

			}
			//取消按钮
			if(e.index == 0) {
				console.log("取消2");
			}
		}, 'div')
	})
})


function getA() {
	$(".content_container").empty();
	$.ajax({
		type: "post",
        url:'http://192.168.10.219:8080/bysj/yp',			
//		url: "http://localhost:8080/bysj/yp",
		async: false,
		dataType: "json",
		data: {
			"type": "sqlist",
			"lx": 1
		},
		success: function(data) {
			console.log("申请列表获取成功");
			for(var i = 0; i < data.length; i++) {
				var id = data[i].CRKID;
				var name = data[i].YPMC;
				var ypfl = data[i].YPFL;
				var user = data[i].NAME;
				var time = data[i].CZSJ;
				var sl = data[i].SL;
				$(".ck").append(
					'<div class="back-row" item="'+id+'">' +
					'<div class="list-back-hd">' +
					'<h1>' + name + '</h1>' +
					'<label>' + ypfl + '</label>' +
					'</div>' +
					'<div class="mui-row list-back-cont">' +
					'<div class="mui-col-sm-9 mui-col-xs-9 cont_l">' +
					'<li class="mui-table-view-cell">' +
					'<label>用户名</label>' +
					'<span>' + user + '</span>' +
					'</li>' +
					'<li class="mui-table-view-cell">' +
					'<label>领用时间：</label>' +
					'<span>' + time + '</span>' +
					'</li>' +
					'</div>' +
					'<div class="mui-col-sm-3 mui-col-xs-3 center back-amount cont_r">' +
					'<li class="mui-table-view-cell">' +
					'<label>领用数量</label>' +
					'<h2>' + sl + 'ml</h2>' +
					'</li>' +
					'</div>' +
					'</div>' +
					'<div class="list-back-bot">' +
					'<div class="btn btn-normal">同意</div>' +
					'</div>' +
					'</div>'
				);
			}

		},
		error: function(err) {
			console.log("归还申请列表获取失败");
			console.log(err);

		}
	});
}

function getB() {
	$(".content_container").empty();
	$.ajax({
		type: "post",
        url:'http://192.168.10.219:8080/bysj/yp',			
//		url: "http://localhost:8080/bysj/yp",
		async: false,
		dataType: "json",
		data: {
			"type": "sqlist",
			"lx": 3
		},
		success: function(data) {
			console.log("归还申请列表获取成功");
			console.log(data);
			for(var i = 0; i < data.length; i++) {
				var id = data[i].CRKID;
				var name = data[i].YPMC;
				var ypfl = data[i].YPFL;
				var user = data[i].NAME;
				var time = data[i].GHSJ;
				var sl = data[i].GHSL;
				var ypid = data[i].DRUGSID;

				$(".rk").append(
					'<div class="back-row" itema="'+id+'" itemb="'+ypid+'" itemc="'+sl+'">' +
					'<div class="list-back-hd">' +
					'<h1>' + name + '</h1>' +
					'<label>' + ypfl + '</label>' +
					'</div>' +
					'<div class="mui-row list-back-cont">' +
					'<div class="mui-col-sm-9 mui-col-xs-9 cont_l">' +
					'<li class="mui-table-view-cell">' +
					'<label>用户名</label>' +
					'<span>' + user + '</span>' +
					'</li>' +
					'<li class="mui-table-view-cell">' +
					'<label>归还时间：</label>' +
					'<span>' + time + '</span>' +
					'</li>' +
					'</div>' +
					'<div class="mui-col-sm-3 mui-col-xs-3 center back-amount cont_r">' +
					'<li class="mui-table-view-cell">' +
					'<label>归还数量</label>' +
					'<h2>' + sl + 'ml</h2>' +
					'</li>' +
					'</div>' +
					'</div>' +
					'<div class="list-back-bot">' +
					'<div class="btn btn-normal">同意</div>' +
					'</div>' +
					'</div>'
				);
			}

		},
		error: function(err) {
			console.log("领用申请列表获取失败");
			console.log(err);

		}
	});
}