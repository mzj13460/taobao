
	
	var ul1=document.getElementById("pic1");
	var next1=document.getElementById("next1");
	var pre1=document.getElementById("pre1");
	var masks1=document.getElementById("mask1");
	var pages1 = document.querySelectorAll("#page1 li");
	var xiaotain=document.getElementById("xiaotian");
	//核心 改变ul的left 运动
	//间隔4S ul运动一次
	var timer2=null;
	var h=0;
	autoPlay1();
	
	//定时器停止和开启
	masks1.onmouseover=function(){
		clearInterval(timer2);			}
	
	masks1.onmouseout=function(){
		autoPlay1();					}
	
	
	
	//左右单击事件
	pre1.onclick=function(){
		h++;
		if(h>=6){
			ul1.style.left="0px";
			h=0;
		}
		move1(ul1,"left",-520*h);
		pageCss1();
		xiaotian.innerText=h+1;
	}
	
	next1.onclick=function(){
		h--;
		if(h<=-1){
			ul1.style.left="-2400px";
			h=5;
		}
		move1(ul1,"right",-520*h);
		pageCss1();
		xiaotian.innerText=h+1;
	}
	
	
	//页码事件
	for(var g=0;g<pages1.length;g++){
		pages1[g].index=g;
		pages1[g].onclick=function(){
		//向左向右？ 跳转页码 和当前所在页码
		if(this.index>h){
			move1(ul1,"left",-520*this.index);
		}else{
			
			move1(ul1,"right",-520*this.index);
		}
		h=this.index;
		xiaotian.innerText=h+1;
		//页码跟随变色
		//清空所有页码的颜色 当前页码夜色变亮
		pageCss1();
		}
	}
	
	
	
	
	
			//(1) 运动 封装在一个函数
            function move1(ele, dir, end) {
                clearInterval(ele.timer2)
                // 如果向左  如果向右
                if (dir === "left") {
                    ele.timer2 = setInterval(function () {
                        ele.style.left = ele.offsetLeft -50 + "px";
                        if (ele.offsetLeft <= end) {
                            clearInterval(ele.timer2);
                            ele.style.left = end + "px";
                        }
                    }, 10)
                } else {
                    ele.timer2 = setInterval(function () {
                        ele.style.left = ele.offsetLeft + 50 + "px";
                        if (ele.offsetLeft >= end) {
                            clearInterval(ele.timer2);
                            ele.style.left = end + "px";
                        }
                    },10);
                }
            }
            
            //（2）页码跟随变色 i  
            function pageCss1(){
            	for(var j=0;j<pages1.length;j++){
				pages1[j].style.background="red";
				}
				pages1[h===6?0:h].style.background="black";
		
            	
            }
            
            
            //（3）开启定时器
            function autoPlay1(){
            	timer2 = setInterval(function () {
                    h++;
                    if (h >= 6) {
                        ul.style.left = "0px";// 让ul 回到初始位置
                        h = 0;                // 第一张 第二张
                    }
                    move1(ul1, "left", -520 * h);
                    pageCss1()
                    xiaotian.innerText=h+1;
                }, 3000)
            	
            }        
            
	