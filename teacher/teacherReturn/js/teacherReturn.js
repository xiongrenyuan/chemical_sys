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
    $("#content_container").on("tap", ".btn-bgcolor", function() {
        var borrow_id = $(this).parents(".back-row").attr("id");
        mui.prompt('', '请输入归还数量', '确认归还', ['取消', '确认'], function(e) {
            document.querySelector('.mui-popup-input input').type = 'number';
            if(e.index == 1) {
                var amount = document.querySelector('.mui-popup-input input').value;
                var param = {};
                param.borrow_id = borrow_id;
                param.amount = amount;
                console.log(param)
            }
        }, 'div')
    })

    $("#content_container").on("tap", ".btn-normal", function() {
        var borrow_id = $(this).parents(".back-row").attr("id");
        mui.confirm('', '无需归还', ['取消', '确认'], function(e) {
            if(e.index == 1) {
                var param = {};
                param.borrow_id = borrow_id;
                param.amount = 0;
                console.log(param)
            }
        }, 'div')
    })

  

})