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
	 var setpicker = function(pickerdom, pickerdata) {
        var picker = new mui.PopPicker();
        picker.setData(pickerdata);
        picker.show(function(selectItems) {
            console.log("selectItems", selectItems);
            $(pickerdom).val(selectItems[0].text);
            picker.dispose();
        })
    }

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