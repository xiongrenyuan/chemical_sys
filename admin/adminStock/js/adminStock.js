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
	require('picker');
	require('moment');
	
//这是品名搜索模块
    //点击输入品名，弹出搜索栏
    $(".pcnum").on("tap",function(){
    	$(".cover").addClass("movecover");
    	$("#input_pc").val("");
    	$(".pc_list").empty();
    })
    //取消搜索栏，关闭遮罩层
	$(".cancel").on("tap", function () {
        $(".cover").removeClass("movecover");
    })
	//点击li，关闭遮罩层
	$(".search_list > li" ).on("tap",function(){
		
		$(".cover").removeClass("movecover");
	   var con_name = $(this).text();
		$("#search_name").html(con_name);
	})
	
	
//这是时间选择器模块

	//设置过期时间的默认值
	var etime = moment(new Date().getTime() + 63072000000).format("YYYY-MM-DD");
    var today_time = new Date().getTime();
    $(".etime").text(etime);
    //选择过期时间
        (function () {
            mui.init();
            var btns = mui('.timeimg');
            btns.each(function (i, btn) {
                btn.addEventListener('tap', function () {
                    var optionsJson = this.getAttribute('data-options') || '{}';
                    var options = JSON.parse(optionsJson);
                    var picker = new mui.DtPicker({
                        type: "date", //设置日历初始视图模式
                        beginYear: 2013, //设置开始年
                        endYear: new Date().getFullYear() + 5, //设置结束年
                        labels: ['年', '月', '日'] //设置默认标签区域提示语
                    })
                    picker.setSelectedValue(etime);
                    picker.show(function (rs) {
                        if(today_time<new Date(rs.text).getTime()){
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