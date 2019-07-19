 		    var olaoli=document.getElementById("laoli918");  
            var ajax512=new XMLHttpRequest;
            ajax512.open("get","js/aiguangjie.php",true);
            ajax512.send(null);
            ajax512.onreadystatechange=function(){
                if(ajax512.readyState===4&&ajax512.status===200){
//              	console.log(ajax512.responseText)					
                    var data5=JSON.parse(ajax512.responseText);
                    var str5= "";
                    for(var i5=0;i5<data5.length;i5++){
                        str5+=`<li class="">
   						<a href="#">
     							<div class="img-wrapper" style="width:180px;height:180px">
        							<img src="${data5[i5].imgurl00}" style="width:180px;height:180px"">
      							</div>
      						<div class="info">
        						<p class="subtitle">
       								 <span class="tb-ifont">&#xe644;</span>${data5[i5].content11}
        						</p>
       							<div class="extra">
          						<div class="pic-wrapper">
            					<img src="imgch/goods6.jpg">
          					</div>
          					<p class="name" style="color:red;">${data5[i5].content22}</p>
        					</div>
      						</div>
    					</a>
  						</li>`
                                 		 }
                    olaoli.innerHTML = str5;
//                  console.log("老李");
                }
            }
