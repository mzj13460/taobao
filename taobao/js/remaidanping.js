//<script>
	
            
            var box = document.getElementById("J_SaleBd");  
            var ajax1=new XMLHttpRequest;
            ajax1.open("get","js/remaidanping.php",true);
            ajax1.send(null);
            ajax1.onreadystatechange=function(){
                if(ajax1.readyState===4&&ajax1.status===200){
//              	console.log(ajax.responseText)
					
                    var data= JSON.parse(ajax1.responseText);
                    var str = "";
                    for(var i=0;i<data.length;i++){
                        str+=`
                        	<li class="item item-1">
		                        <a href="" class="image"><img src="${data[i].imgurl}" ></a>
		                        	<a href="" class="line-1"><img class="postfree" src="imgch/baoyou.png" >
		                        	${data[i].content}</a>
		                        <div class="line-2">
			                    	<a href="" class="comment">评价 <em>${data[i].pingjia}</em></a>
			                    	<a href="" class="collect">收藏 <em>${data[i].shoucang}</em></a>
		                        </div>
		                        <div class="line-3">
			                   		<a href="" class="p4p-promo"><span>¥</span><em>${data[i].price}</em></a>
			                    	<a href="" class="price"><span>¥</span><em>${data[i].benefit}</em></a>
			                    	<a href="" class="sell">月销<em>${data[i].sale}</em>笔</a>
		                        </div>
	                        </li>`           			  
                    }
                    box.innerHTML = str;
                }
            }

//          console.log("热卖单品");
            
//	</script>