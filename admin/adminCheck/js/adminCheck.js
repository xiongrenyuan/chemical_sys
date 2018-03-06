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
	$(".for_more").click(function(){
		window.location.href ="../adminCheck/adminCheck-detail.html";
	})
	
})