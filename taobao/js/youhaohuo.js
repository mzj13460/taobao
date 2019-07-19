
	
            
            var olaohu=document.getElementById("laohu918");  
            var ajax918=new XMLHttpRequest;
            ajax918.open("get","js/youhaohuo.php",true);
            ajax918.send(null);
            ajax918.onreadystatechange=function(){
                if(ajax918.readyState===4&&ajax918.status===200){
//              	console.log(ajax918.responseText)
					
                    var data8= JSON.parse(ajax918.responseText);
                    var str8 = "";
                    for(var i8=0;i8<data8.length;i8++){
                        str8+=`<a href="" class="">
    						<div class="img-wrapper">
    							  <img class="a-all" src="${data8[i8].imgurl}">
   							</div>
    						<div class="info">
      						  <h4 class="a-all" id="dg-item-tl-1">${data8[i8].content1}</h4>
     						  <p>${data8[i8].content2}</p>
  							  <p class="extra"><span class="tb-ifont"></span>${data8[i8].people} 人说好</p>
  							</div>
 							   </a>`           			  
                    }
                    olaohu.innerHTML = str8;
//                  console.log("老胡");
                }
            }


            