
//<script>
            var like = document.getElementById("hejing");  
            var ajax=new XMLHttpRequest;
            ajax.open("get","js/cainixihuan.php",true);
            ajax.send(null);
            ajax.onreadystatechange=function(){
                if(ajax.readyState===4&&ajax.status===200){
//            	console.log(ajax.responseText)
					
                    var shuju= JSON.parse(ajax.responseText);
                    var htj = "";
                    for(var j=0;j<shuju.length;j++){
htj+=`<div class="item">
    <a href="" class="hotsale-item">
      <div class="img-wrapper">
        <img src="${shuju[j].imgurl}" style="width:100%;height:100%;" >
      </div>
      <h4>${shuju[j].content}</h4>
    </a>
    <p class="info">
      <span class="marks adHot" style="background-image: url(&quot;imgch/hot.png&quot;); 
      	width: 33px; height: 15px; left: 0px; top: 5px;"></span>
      <span class="price"><em>¥</em>${shuju[j].price}</span>
      <span class="sales">销量:${shuju[j].sale}</span>
    </p>
    <a class="item-more" href="" >
      <p class="similar"><i class="tb-ifont love">&#xe69c;</i>找相似</p>
      <p>发现更多相似的宝贝<span class="tb-ifont">&#xe665;</span></p>
    </a>
  </div>`
                        		            
                    }
                    like.innerHTML = htj;
                }
            }

//          console.log("猜你喜欢");
//      </script>
	
	