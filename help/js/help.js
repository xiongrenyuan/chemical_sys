$(function () {
    var helpData = [   
          {
            title: "乙酸",
            listCon: '<p>\n'+ 
            '乙酸(浓),必须非常小心地操作。可能由于吸入或皮肤吸收而受到伤害。要戴合适的手套和护目镜。在化学通风橱\生物安全柜里使用。\n'+
            '</p>'
         }, 
         {
            title: "乙腈（jing）",
            listCon: '<p>\n'+ 
            '乙腈（jing）是非常易挥发和特别易燃的，它是一种刺激物和化学窒息剂，可因吸入、咽下或皮肤吸收而发挥其效应。严重中毒的病人\n'+
            '可按氰化物中毒方式处理。操作时要戴合适的手套和安全眼镜。只能在通风橱\生物安全柜里使用，远离热、火花和明火。\n'+
            '</p>'
         }, 
         {
            title: "氯化铵(NH4Cl)",
            listCon: '<p>\n'+ 
            '氯化铵(NH4Cl)可因吸入、咽下或皮肤吸收而危害健康。操作时要戴合适的手套和安全眼镜并在通风橱\生物安全柜里进行。\n'+
            '</p>'
         },
         {
            title: "氢氧化铵(NH4OH)",
            listCon: '<p>\n'+ 
            '氢氧化铵(NH4OH)是氨的水溶液，是腐蚀剂。操作时应极为谨慎。氨会从溶液中散发出来，它是腐蚀性的和有毒的，并易引起爆炸。操\n'+
            '作时戴合适的手套并只能在通风橱\生物安全柜里进行。\n'+
            '</p>'
         }, 
         {
            title: "硫酸胺[(NH4)2SO4]",
            listCon: '<p>\n'+ 
            '硫酸胺[(NH4)2SO4]可因吸入、咽下或皮肤吸收而受到伤害。戴合适的手套和安全眼镜。在化学通风橱\生物安全柜里使用。\n'+
            '</p>'
         },
         {
            title: "硼酸(H3BO3)",
            listCon: '<p>\n'+ 
            '硼酸(H3BO3)可因吸入、咽下或皮肤吸收而危害健康。操作时戴合适的手套和护目镜。\n'+
            '</p>'
         },
          {
            title: "溴酚蓝",
            listCon: '<p>\n'+ 
            '溴酚蓝可因吸入、咽下或皮肤吸收而危害健康。操作时要戴合适的手套和安全眼镜并在化学通风橱\生物安全柜内操作。\n'+
            '</p>'
         },
         {
            title: "亚硝酸钠(NaNO2)",
            listCon: '<p>\n'+ 
            ' 亚硝酸钠(NaNO2)对眼睛、黏膜、上呼吸道和皮肤有刺激作用。可因吸入、咽下或皮肤吸收而受害。\n'+
            '戴合适的手套和安全眼镜并始终在化学通风橱\生物安全柜内使用，切勿近酸。\n'+
            '</p>'
         },



         {
            title: "氯仿(CHCl3)",
            listCon: '<p>\n'+ 
            '氯仿(CHCl3)对皮肤、眼睛、黏膜和呼吸道有刺激作用。它是一种致癌剂，可损害肝和肾。它也易挥发，避免吸入挥发的气体。操作时\n'+
            '戴合适的手套和安全眼镜并始终在化学通风橱\生物安全柜里进行。\n'+
            '</p>'
         },
         {
            title: "柠檬酸",
            listCon: '<p>\n'+ 
            '柠檬酸是一种兴奋剂，可因吸入、咽下或皮肤吸收而受危害健康。\n'+
            '它对眼睛可形成严重损伤的危险。操作时戴合适的手套和安全护目镜。勿吸入其粉末。\n'+
            '</p>'
         },
         {
            title: "氯化钴(COCl2)",
            listCon: '<p>\n'+ 
            '氯化钴(COCl2)可因吸入、咽下或皮肤吸收而受到危害。操作时戴合适的手套和安全眼镜。\n'+
            '</p>'
         },
         {
            title: "硫酸铜(CuSO4)",
            listCon: '<p>\n'+ 
            '硫酸铜(CuSO4)可因吸入、咽下或皮肤吸收而受到危害。操作时戴合适的手套和安全眼镜。\n'+
            '</p>'
         },   
         {
            title: "二乙胺[NH(C2H5)2]",
            listCon: '<p>\n'+ 
            '二乙胺[NH(C2H5)2]是腐蚀剂，有毒并极易燃。可因吸入、咽下或皮肤吸收而受到危害。\n'+
            '操作时要戴合适的手套和安全眼镜。仅在化学通风橱\生物安全柜内操作。远离热、火花和明火。\n'+
            '</p>'
         },
         {
            title: "N，N-二甲基甲酰胺[DMF，HCON(CH3)2]",
            listCon: '<p>\n'+ 
            'N，N-二甲基甲酰胺[DMF，HCON(CH3)2]对眼睛、皮肤和黏膜有刺激作用。可通过吸入、咽下或皮肤吸收发\n'+
            '挥其毒性效应。经常吸 入可引起肝脾损伤。操作时要戴合适的手套和安全眼镜并在化学通风橱\生物安全柜内进行。\n'+
            '</p>'
         },
         {
            title: "乙醇[CH3CH2OH]",
            listCon: '<p>\n'+ 
            '乙醇[CH3CH2OH]可因吸入、咽下或皮肤吸收而受到危害。操作时戴合适的手套和安全眼镜。\n'+
            '</p>'
         },
        

         {
            title: "乙酸乙酯",
            listCon: '<p>\n'+ 
            '乙酸乙酯：咽下可致命，可因吸入或皮肤吸收而受害。操作时戴合适的手套和安全护目镜。\n'+
            '切勿吸入其粉末。在通风良好的地方使用。\n'+
            '</p>'
         },
         {
            title: "氯化铁(FeCl3)",
            listCon: '<p>\n'+ 
            '氯化铁(FeCl3)可因吸入、咽下或皮肤吸收而危害健康。要戴合适\n'+
            '的手套和安全眼镜并在化学通风橱\生物安全柜内进行操作。\n'+
            '</p>'
         },
         {
            title: " 甲醛(HCOH)",
            listCon: '<p>\n'+ 
            '甲醛(HCOH)有很大的毒性并易挥发，也是一种致癌剂。很容易通过皮肤吸收，对眼睛、黏膜和上呼吸道有刺激和损伤作用。避免吸入\n'+
            '其挥发的汽雾。要戴合适的手套和安全眼镜。始终在化学通风橱\生物安全柜内进行操作。远离热、火花及明火。\n'+
            '</p>'
         },
         {
            title: "甲酸(HCOOH)",
            listCon: '<p>\n'+ 
            ' 甲酸(HCOOH)毒性强，对黏膜组织、上呼吸道、眼睛和皮肤非常有害。可因吸入、咽下或皮肤吸收而危害健康。戴合适的手套和安全\n'+
            '眼镜(或面具)并在化学通风橱\生物安全柜内使用。\n'+
            '</p>'
         },
         {
            title: "硝酸钠(NaNO3)",
            listCon: '<p>\n'+ 
            '硝酸钠(NaNO3)可因吸入、咽下或皮肤吸收而损害健康。戴合适\n'+
            '的手套和安全眼镜。在化学通风橱\生物安全柜里使用。\n'+
            '</p>'
         },
         {
            title: "玻璃棉",
            listCon: '<p>\n'+ 
            '玻璃棉可因吸入而受害并引起皮肤过敏。戴合适的手套和面具。\n'+
            '</p>'
         },
         {
            title: "硫酸(H2SO4)",
            listCon: '<p>\n'+ 
            '硫酸(H2SO4)毒性非常强，对黏膜、上呼吸道、眼睛和皮肤的组\n'+
            '织有极大的破坏作用。可引起灼伤，与其他物质(如纸)接触可引起失\n'+
            '火。戴合适的手套、安全眼镜和实验工作服，在化学通风橱。\n'+
            '</p>'
         },
          {
            title: "盐酸(HCl)",
            listCon: '<p>\n'+ 
            '盐酸(HCl)易挥发并因吸入、咽下或皮肤吸收而受害。对黏膜、上\n'+
            '呼吸道和皮肤有很大的伤害作用。戴合适的手套和安全眼镜。\n'+
            '在化学通风橱\生物安全柜里使用并格外小心。当大量操作时要戴护目镜。\n'+
            '</p>'
         },
          {
            title: "过氧化氢(H2O2)",
            listCon: '<p>\n'+ 
            '过氧化氢(H2O2)具有腐蚀性、毒性，对皮肤有非常严重的损伤作\n'+
            '用。可因吸入、咽下或皮肤吸收而危害健康。戴合适的手套和安全眼\n'+
            '镜并只能在化学通风橱\生物安全柜里进行操作。\n'+
            '</p>'
         },
          {
            title: "硫化氢(H2S)",
            listCon: '<p>\n'+ 
            '硫化氢(H2S)是非常强的毒性气体，能引起呼吸中枢麻痹。\n'+
            '对皮肤有刺激和腐蚀性，能引起嗅觉疲劳。不要靠气味去检测其是否存在。操作时要格外小心。盛硫化氢的容器要放置在化学通风橱\n'+
            '\生物安全柜里或放在装有通风设备的房间里。戴合适的手套和安全眼镜。它也非常易燃，要远离热、火花和明火。\n'+
            '</p>'
         },
          {
            title: "氯化镁(MgCl2)",
            listCon: '<p>\n'+ 
            ' 氯化镁(MgCl2)可因吸入、咽下或皮肤吸收而受害。戴合适的手套和安全眼镜。在化学通风橱\n'+
            '\生物安全柜里使用。\n'+
            '</p>'
         },



          {
            title: "硫酸镁(MgSO4)",
            listCon: '<p>\n'+ 
            '硫酸镁(MgSO4)可因吸入、咽下或皮肤吸收而受害。戴合适的手\n'+
            '套和安全眼镜。在化学通风橱\生物安全柜里使用。\n'+
            '</p>'
         },
          {
            title: "甲醇(MeOH或H3COH)",
            listCon: '<p>\n'+ 
            '甲醇(MeOH或H3COH)是有毒的，能引起眼睛失明。可因吸入、咽下或皮肤吸收而受害。\n'+
            '适当的通风是必要的，以便减少与其挥发气体的接触。避免吸入这些挥发的气体。戴合适的手套和安全护目镜。\n'+
            '只能在化学通风橱\生物安全柜里使用。\n'+
            '</p>'
         },
         {
            title: "硫酸镍(NiSO4)",
            listCon: '<p>\n'+ 
            '硫酸镍(NiSO4)是致癌剂，可引起可遗传的遗传损伤。\n'+
            '它是一种皮肤刺激物，可因吸入、咽下或皮肤吸收而受害。戴合适的手套和安全\n'+
            '眼镜。在化学通风橱\生物安全柜里使用，切勿吸入其粉末。\n'+
            '</p>'
         },
          {
            title: "硝酸(HNO3)",
            listCon: '<p>\n'+ 
            '硝酸(HNO3)易挥发，操作要格外小心。\n'+
            '通过吸入、咽下或皮肤吸收而产生毒性作用。戴合适的手套和安全护目镜。在化学通风橱\生物安全柜里操作。切勿吸入其挥发的气雾。远离热、火花和明火。高\n'+
            '氯酸可因吸入、咽下或皮肤吸收而致病。戴合适的手套和安全眼镜，只能在化学通风橱\生物安全柜里使用。\n'+
            '</p>'
         },
         {
            title: "酚",
            listCon: '<p>\n'+ 
            '酚具有很强的毒性和高度腐蚀性，并能引起严重的灼伤。可因吸入、咽下或皮肤吸收而受到危害。戴合适的手套、防目镜和防护服。\n'+
            '始终在化学通风橱\生物安全柜里使用。如果皮肤接触到酚，要用大量的水冲洗接触酚的部位，并用肥皂和水洗，切记勿用乙醇洗!  \n'+
            '</p>'
         },
         {
            title: "磷酸(H3PO4)",
            listCon: '<p>\n'+ 
            '磷酸(H3PO4)具有高度腐蚀性，可因吸入、咽下或皮肤吸收而受\n'+
            '害。戴合适的手套和安全眼镜。\n'+
            '</p>'
         },
         {
            title: "哌啶",
            listCon: '<p>\n'+ 
            '哌啶，毒性高，对眼睛、皮肤、呼吸道和胃肠道有腐蚀性。它与\n'+
            '酸和氧化剂剧烈反应，可因吸入、咽下或皮肤吸收而危害健康。切勿 吸入其挥发的气体。远离热、火花和明火。\n'+
            '戴合适的手套和安全眼镜。在化学通风橱\生物安全柜里使用。\n'+
            '</p>'
         },
         {
            title: "氯化钾(KCl)",
            listCon: '<p>\n'+ 
            '氯化钾(KCl)可因吸入、咽下或皮肤吸收而受到危害。戴合适的手套和安全眼镜。\n'+
            '</p>'
         },
         {
            title: "氢氧化钾(KOH)/KOH/甲醇",
            listCon: '<p>\n'+ 
            '氢氧化钾(KOH)/KOH/甲醇：毒性可能是很高的。可因吸入、咽下或皮肤吸收而受到危害。其溶液有腐蚀性。操作要非常小心。要戴\n'+
            '合适的手套。\n'+
            '</p>'
         },
         {
            title: "磷酸钾(KH2PO4/K2HPO4/K3PO4)",
            listCon: '<p>\n'+ 
            '磷酸钾(KH2PO4/K2HPO4/K3PO4)可因吸入、咽下或皮肤吸收而受害。戴合适的手套和安全眼镜。勿吸入其粉末。\n'+
            '</p>'
         },
         {
            title: "硝酸银(AgNO3)",
            listCon: '<p>\n'+ 
            '硝酸银(AgNO3)是一种很强的氧化剂，要谨慎操作。它可因吸入、咽下或皮肤吸收而损害健康。\n'+
            '避免接触皮肤，戴合适的手套和安全眼镜。与其他物质接触可引起爆炸\n'+
            '</p>'
         },
         {
            title: "磷酸氢二钠(Na2HPO4)",
            listCon: '<p>\n'+ 
            '磷酸氢二钠(Na2HPO4)可因吸入、咽下或皮肤吸收而受害。戴合适的手套和安全眼镜。在化学通风橱\生物安全柜里使用。\n'+
            
            '</p>'
         },
         {
            title: "氢氧化钠(NaOH)",
            listCon: '<p>\n'+ 
            '氢氧化钠(NaOH)和含有NaOH的溶液有很强的毒性和苛性，操作时要格外小心。戴合适的手套和防护面具。\n'+
            '</p>'
         },
        

 
         
         
         
    ]



 

   

 


  


 
    var app = new Vue({
        el: '#help',
        data: {
            helpData: helpData,
            tip: 123,
            filterText : "",
            searchTip : false,
            seaT : "",
            seaNum : 0
        },
        methods:{
            myfilter : function(value){
                if(value.indexOf(this.seaT) !== -1){

                    this.seaNum = 1 ;
                    return value;


                }else {
                    return false
                }


            }
        }

    })
    // app.tipC();
    $(".com").on("click",".tip",function () {
        $(this).parent().siblings().find('.arrow i').removeClass("arrowRot");
        $(this).find(".arrow i").toggleClass("arrowRot");
        $(this).parent().siblings().find(".listCon").slideUp();
        $(this).next().slideToggle();
    })
    var flagN = true;
    $(".str").keyup(function () {
        flagN = true;
        if( $(".str").val() == "") {
            $(".result").hide();
            app.seaT = ""
        }
    });

    $(".seaBtn").click(function () {
        $(".result").hide();
        if (flagN) {
            flagN = false;
            app.seaNum = 0;
        }
        app.seaT = $(".str").val();
        if(app.seaT !== "") {
            setTimeout(function () {
                if (app.seaNum !== 1){
                    $(".result").show();
                }
            },500)
        }

    });


    // Vue.filter('search', function (value) {
    //     var tit = value.indexOf(seaT);
    //     console.log(tit);
    //     if (tit !== -1) {
    //         return value;
    //     } else {
    //         return "";
    //     }
    // })
    //
    // var myFil = filter("search");


})
