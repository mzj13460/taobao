
	var olunbotu666=document.getElementById("lunbotu666");
	var olunbotubao=document.getElementById("lunbotubao");
	var timer051=null;
	var wm=0;
	autoPlay051();
	
	//定时器停止和开启
	olunbotubao.onmouseover=function(){
		clearInterval(timer051);			}
	
	olunbotubao.onmouseout=function(){
		autoPlay051();					}
	
			//(1) 运动函数
            function move051(ele, dir, end) {
                clearInterval(ele.timer051)
                if (dir === "top") {
                    ele.timer051 = setInterval(function () {
                        ele.style.top = ele.offsetTop - 8 + "px";
                        if (ele.offsetTop <= end) {
                            clearInterval(ele.timer051);
                            ele.style.top = end + "px";
                        }
                    },100)
                } else {
                    ele.timer051 = setInterval(function () {
                        ele.style.top = ele.offsetTop + 8 + "px";
                        if (ele.offsetTop >= end) {
                            clearInterval(ele.timer051);
                            ele.style.top = end + "px";
                        }
                    },100);
                }
            }
            
           //（3）开启定时器
            function autoPlay051(){
            	timer051 = setInterval(function () {
                    wm++;
                    if (wm >= 3) {
                        olunbotu666.style.top = "0px";
                        wm =0;             
                    }
                    move051(olunbotu666, "top", -73*wm);
                }, 3000)
            	
            }
    
