//<script>
	
        var house = document.getElementById("ohouse");
        var ht1 = document.getElementById("ch1");
        var ht2 = document.getElementById("ch2");
        var ht3 = document.getElementById("ch3");
        var ht4 = document.getElementById("ch4");
        var ht5 = document.getElementById("ch5");
        var ht6 = document.getElementById("ch6");
        var ht7 = document.getElementById("ch7");
        var ht8 = document.getElementById("ch8");
        var shousuokuangw=document.getElementById("shousuokuang-wrap")
        var oha = document.getElementsByClassName("ha");
        window.onscroll = function () {
                var a=document.documentElement.scrollTop;
                
               
		
//		console.log(a)
		if(a>100){
			shousuokuangw.style.display="block"
		}
		else{shousuokuangw.style.display="none"
			
		}
                
                
                
                
                
                if (a > 575) {
                    house.style.top = 50+"px";
                    // 清除所有楼层的背景色
                    for (var i = 0; i < oha.length; i++) {
                    	oha[i].index=i;
                        oha[i].style.background = "#FFF";
                        oha[i].style.color = "#FFF";
                        oha[i].onmouseover=function(){
                        	for(var j = 0; j < oha.length; j++){
                        	oha[j].style.background = "#FFF";
                        	oha[j].style.color = "";
                        }
                        	this.style.background="#FF4400";
                        	this.style.color="#FFF";
                        	oha[0].style.color="#FFF";
                        	oha[0].style.background="#FF4400";
                        } 
                        oha[i].onmousemove=function(){
                        	for(var j = 0; j < oha.length; j++){
                        	oha[j].style.background = "#FFF";
                        	oha[j].style.color = "";
                        }
                        	this.style.background="#FF4400";
                        	this.style.color="#FFF";
                        	oha[0].style.color="#FFF";
                        	oha[0].style.background="#FF4400";
                        }
                       
                    }
                    
                    if (a >= 775 && a < 1800) {
                        ht1.style.background = "#FF4400";
                        ht1.style.color = "#FFF";
                        ht6.style.display="block";
                    }else{ht1.style.color = "#F40";}
                   if (a >= 1800 && a < 2650) {
                        ht2.style.background = "#FF4400";
                        ht2.style.color = "#FFF";
                        ht6.style.display="block";
                    } else{ht2.style.color = "deeppink";}
                    if (a >= 2650 && a < 3420) {
                        ht3.style.background = "#FF4400";
                        ht3.style.color = "#FFF";
                        ht6.style.display="block";
                    }else{ht3.style.color = "#8d7afb";}
                    if(a >= 3420 && a < 4650){
                        ht4.style.background = "#FF4400";
                        ht4.style.color = "#FFF";
                        ht6.style.display="block";
                    }else{ht4.style.color = "#A8C001";}
                    if(a>=4650) {
                        ht5.style.background = "#FF4400";
                        ht5.style.color = "#FFF";
                        ht6.style.display="block";
                    ht6.style.background = "#FFF";
                    ht6.style.color = "black";
                    ht7.style.background = "#FFF";
                    ht7.style.color = "black";
                    ht8.style.background = "#FFF";
                    ht8.style.color = "black";
                }else{ht5.style.color = "#F40";
                    ht6.style.background = "#FFF";
                    ht6.style.color = "black";
                    ht7.style.background = "#FFF";
                    ht7.style.color = "black";
                    ht8.style.background = "#FFF";
                    ht8.style.color = "black";
                    }
                if(a<750){
                	ht1.style.background = "#FF4400";
                    ht1.style.color = "#FFF";
                    ht6.style.display="none";
                    ht6.style.background = "#FFF";
                    ht6.style.color = "black";
                    ht7.style.background = "#FFF";
                    ht7.style.color = "black";
                    ht8.style.background = "#FFF";
                    ht8.style.color = "black";    
                    
                }else{}
                    
                    
                } else {
                    house.style.top = 478+"px";
                    ht6.style.display="none";
//                  ht6.style.background = "#FFF";
//                  ht6.style.color = "black";
//                  ht7.style.background = "#FFF";
//                  ht7.style.color = "black";
//                  ht8.style.background = "#FFF";
//                  ht8.style.color = "black";
                }
            }
        
        ht1.onclick=function(){
            scrollMove(775);
        }
        ht2.onclick = function () {
            scrollMove(1800);
            }
        ht3.onclick = function () {
            scrollMove(2650);
            }
        ht4.onclick = function () {
            scrollMove(3420);
            }
        ht5.onclick = function () {
            scrollMove(4650);
            }
        ht6.onclick = function () {
            scrollMove(0);
            }
        
        var timer=null;
        function scrollMove(end){
            clearInterval(timer);
            if(document.documentElement.scrollTop>end){
                // 上
               timer=setInterval(function(){
                  document.documentElement.scrollTop-=100;
                  if(document.documentElement.scrollTop<=end){
                      clearInterval(timer);
                      document.documentElement.scrollTop=end;
                  }
               })
            }else{
                // 下
                timer = setInterval(function () {
                    document.documentElement.scrollTop += 100;
                    if (document.documentElement.scrollTop >= end) {
                        clearInterval(timer);
                        document.documentElement.scrollTop = end;
                    }
                })
            }
        }
        
        
//      </script>		