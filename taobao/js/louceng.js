var aside=document.getElementById("aside");
			var f1=document.getElementById("f1");
			var f2=document.getElementById("f2");
			var f3=document.getElementById("f3");
			var f4=document.getElementById("f4");
			var f5=document.getElementById("f5");
			var f6=document.getElementById("f6");
			var lis=document.getElementsByTagName("li");
			window.onscroll=function(){
				var a=document.documentElement.scrollTop;
					if(a>596){
						f6.style.display="block"	
						aside.style.top=50+"px";
					
						for(var i=0;i<lis.length;i++){
							lis[i].style.background="none";
						}
						if(a>=596&&a<2248){
							f1.style.background="#ff5001";
							f1.style.color="#fff";
							f1.style.border="#ff5001";
						}else if(a>=2248&&a<3096){
							f2.style.background="#ff5001";
							f2.style.color="#fff";
							f2.style.border="#ff5001";
						}else if(a>=3096&&a<3874){
							f3.style.background="#ff5001";
							f3.style.color="#fff";
							f3.style.border="#ff5001";
						}else if(a>=3874&&a<5100){
							f4.style.background="#ff5001";
							f4.style.border="#ff5001";
							f4.style.color="#fff";
						}else{
							f5.style.background="#ff5001";
							f5.style.color="#fff";
						}
					}else{
						aside.style.top=470+"px";
						f6.style.display="none"
					}
						
				}
				var timer=null;
					f1.onclick=function(){
						scrollMove(596)
					}
					f2.onclick=function(){
						scrollMove(2248)
					}
					f3.onclick=function(){
						scrollMove(3096)
					}
					f4.onclick=function(){
						scrollMove(3874)
					}
					f5.onclick=function(){
						scrollMove(5100)
					}
				function scrollMove(end){
					clearInterval(timer);
					//到达的位置与滚动轴所在位置比较
					// document.documentElement.scrollTop;
					if(document.documentElement.scrollTop>end){
						timer=setInterval(function(){
							document.documentElement.scrollTop-=20;
							if(document.documentElement.scrollTop<=end){
								clearInterval(timer);
								document.documentElement.scrollTop=end
							}
						},10)
						
					}else{
						timer=setInterval(function(){
							document.documentElement.scrollTop+=20;
							if(document.documentElement.scrollTop>=end){
								clearInterval(timer);
								document.documentElement.scrollTop=end
							}
						},10)
						
					}
				}