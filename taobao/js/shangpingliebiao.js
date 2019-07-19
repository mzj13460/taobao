var fig=document.getElementById("box");
var hotSale=[{
			imgurl:"img/TB2_RyAwOCYBuNkSnaVXXcMsVXa_!!0-saturn_solar.jpg_200x200.jpg_.webp",
			cont:"轻口鲫鱼漂高灵敏醒目芦苇浮漂正品鱼漂套装",
			pingjia:0,
			shoucang:1600,
			span:1586,
			price:50,
			sale:71
		},{
			imgurl:"img/O1CN01wu88Yh1JEfMIjcv6F_!!0-saturn_solar.jpg_200x200.jpg_.webp",
			cont:"欧式大理石电视柜 机柜茶几 电视柜组合套装",
			pingjia:20,
			shoucang:160,
			price:500,
			sale:230
		},{
			imgurl:"img/O1CN01HheUVJ1KXH43oFQYC_!!0-saturn_solar.jpg_200x200.jpg_.webp",
			cont:"欧式大理石电视柜茶几组合客厅实木雕花地柜",
			pingjia:500,
			shoucang:100,
			price:5000,
			sale:400
		},{
			imgurl:"img/O1CN011V78E6BA5dkf08D_!!0-saturn_solar.jpg_200x200.jpg_.webp",
			cont:"百佳惠欧式沙发奢华皮布小户型美式全实木雕",
			pingjia:352,
			shoucang:16058,
			price:501,
			sale:775
		},{
			imgurl:"img/O1CN01tzpmCM1V78ECoDyhX_!!0-saturn_solar.jpg_200x200.jpg_.webp",
			cont:"百佳惠欧式圆餐桌美式1.38米实木餐桌椅组合",
			pingjia:48,
			shoucang:160,
			price:450,
			sale:371
		},{
			imgurl:"img/O1CN011V78E6BA5dkf08D_!!0-saturn_solar.jpg_200x200.jpg_.webp",
			cont:"百佳惠实木欧式餐桌餐椅组合圆形法式吃饭桌",
			pingjia:240,
			shoucang:1200,
			price:505,
			sale:731
		},{
			imgurl:"img/O1CN01MFajzj1V78ECVGqxA_!!0-saturn_solar.jpg_200x200.jpg_.webp",
			cont:"百佳惠欧式双人床1.8米实木雕花公主床大户",
			pingjia:210,
			shoucang:1750,
			price:520,
			sale:771
		},{
			imgurl:"img/O1CN0198A7r71V78EAzGryb_!!0-saturn_solar.jpg_200x200.jpg_.webp",
			cont:"百佳惠欧式床实木雕花双人床1.8米公主床主",
			pingjia:520,
			shoucang:1300,
			price:552,
			sale:718
		},{
			imgurl:"img/O1CN011V78E82FhfPuR2o_!!0-saturn_solar.jpg_200x200.jpg_.webp",
			cont:"百佳惠欧式床实木床欧式奢华法式1.8米双人",
			pingjia:85,
			shoucang:16900,
			price:503,
			sale:715
		},{
			imgurl:"img/O1CN01LcnZSI1V78EDT88GU_!!0-saturn_solar.jpg_200x200.jpg_.webp",
			cont:"百佳惠欧式真皮沙发法式沙发组合高档别墅大",
			pingjia:5350,
			shoucang:16300,
			price:5055,
			sale:713
		}	
		]
		var str="";
		for(var i=0;i<hotSale.length;i++){
			str+=`<figure>
						<a href=""><img src=${hotSale[i].imgurl}></a>
						<figcaption>
							<a class="cont" href=""><img src="img/TB1APkObOIRMeJjy0FbXXbnqXXa-56-32.png">${hotSale[i].cont}</a>
							<a class="pingjia" href="">评价 ${hotSale[i].pingjia}</a>
							<a class="shoucang" href="">收藏 ${hotSale[i].shoucang}</a>
							<a class="price" href=""><i>￥</i>${hotSale[i].price}<span>￥398</span></a>
							<a class="sale" href="">月销${hotSale[i].sale}笔</a>
						</figcaption>
				</figure>`
		}
		console.log(str)
		fig.innerHTML=str;