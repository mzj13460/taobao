	
	var ul=document.getElementById("pic");
	var next=document.getElementById("next");
	var pre=document.getElementById("pre");
	var masks=document.getElementById("mask");
	var pages = document.querySelectorAll("#page li");
	var timer1=null;
	var i=0;
	autoPlay();
	masks.onmouseover=function(){
		clearInterval(timer1);			}
		
	masks.onmouseout=function(){
		autoPlay();	
		setInterval(timer1);
	}
	
	//左右单击事件
	pre.onclick=function(){
		i++;
		if(i>=6){
			ul.style.left="0px";
			i=1;
		}
		move(ul,"left",-520*i);
		pageCss();
	}
	
	next.onclick=function(){
		i--;
		if(i<=-1){
			ul.style.left="-2400px";
			i=4;
		}
		move(ul,"right",-520*i);
		pageCss();
	}
	
	
	//页码事件
	for(var k=0;k<pages.length;k++){
		pages[k].index=k;
		pages[k].onclick=function(){
		//向左向右？ 跳转页码 和当前所在页码
		if(this.index>i){
			move(ul,"left",-520*this.index);
		}else{
			
			move(ul,"right",-520*this.index);
		}
		i=this.index;
		
		//页码跟随变色 清空所有页码的颜色 当前页码夜色变亮
		pageCss();
		}
	}
	
	
			//(1) 运动 封装在一个函数
            function move(ele, dir, end) {
                clearInterval(ele.timer)
                // 如果向左  如果向右
                if (dir === "left") {
                    ele.timer = setInterval(function () {
                        ele.style.left = ele.offsetLeft -50 + "px";
                        if (ele.offsetLeft <= end) {
                            clearInterval(ele.timer);
                            ele.style.left = end + "px";
                        }
                    }, 10)
                } else {
                    ele.timer = setInterval(function () {
                        ele.style.left = ele.offsetLeft + 50 + "px";
                        if (ele.offsetLeft >= end) {
                            clearInterval(ele.timer);
                            ele.style.left = end + "px";
                        }
                    },10);
                }
            }
            
            //（2）页码跟随变色 i  
            function pageCss(){
            	for(var t=0;t<pages.length;t++){
				pages[t].style.background="#fff";
				}
				pages[i===5?0:i].style.background="red";
		
            	
            }
            
            
            //（3）开启定时器
            function autoPlay(){
            	timer1 = setInterval(function () {
                    i++;
                    if (i >= 6) {
                        ul.style.left = "0px";// 让ul 回到初始位置
                        i = 1;                // 第一张 第二张
                    }
                    move(ul, "left", -520 * i);
                    pageCss()
                }, 3000)
            	
            }        

	