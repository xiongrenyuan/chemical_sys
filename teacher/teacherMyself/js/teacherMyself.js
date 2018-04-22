$(function(){
		var userid = localStorage.getItem("userid");
	$.ajax({
    		type:"post",
    		url:"http://localhost:8080/bysj/yp",
    		cache:false,
    		dataType:"json",
    		data:{
    			"type":"myly",
    			"userid":userid
    			},
    		success:function(data){
    			console.log(data);
    		    $("#content_container").empty();	
    			$.each(data, function(i,item) {
             
	             $("#content_container").append(
           '<div class="back-row">'+
                '<div class="list-back-hd">'+
                    '<h1>'+ item.YPMC+'</h1>'+
                    '<label>'+ item.DRUGSID+'</label>'+
                    '<label class="fr un-approve">'+ item.SFGH+'</label>'+
                '</div>'+
                '<div class="mui-row list-back-cont">'+
                    '<div class="mui-col-sm-9 mui-col-xs-9 cont_l">'+
                        '<li class="mui-table-view-cell">'+
                            '<label>用途</label>'+
                            '<span>'+ item.YT+'</span>'+         
                        '</li>'+
                       
                        '<li class="mui-table-view-cell">'+
                            '<label>领用时间</label>'+
                            '<span>'+ item.CZSJ+'</span>'+
                        '</li>'+
                    '</div>'+
                    '<div class="mui-col-sm-3 mui-col-xs-3 center back-amount cont_r">'+
                        '<li class="mui-table-view-cell">'+
                            '<label>领用数量</label>'+
                            '<h2>'+ item.SL+'ml</h2>'+
                        '</li>'+
                    '</div>'+
                '</div>'
             	
	             )
	             
	             
	             
    			});
    		},
    		error:function(){
    			console.log("获取药品名称数据失败");
    		}		
	})
})

