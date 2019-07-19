var data=[{src:"img-gouwuche/hong.jpg",main:"Apple iPhoneXR(A2107) 64GB全网通-双卡双待",se:"color：红色",price1:5699,price2:5699}, 
		{src:"img-gouwuche/lan.jpg",main:"Apple iPhoneXR(A2107) 128GB全网通-双卡双待",se:"color：蓝色",price1:5799,price2:5799},
		{src:"img-gouwuche/he.jpg",main:"Apple iPhoneXR(A2107) 128GB全网通-双卡双待",se:"color：蓝色",price1:5899,price2:5899},
		{src:"img-gouwuche/bai.jpg",main:"Apple iPhoneXR(A2107) 128GB全网通-双卡双待",se:"color：蓝色",price1:5999,price2:5999},
		{src:"img-gouwuche/huang.jpg",main:"Apple iPhoneXR(A2107) 128GB全网通-双卡双待",se:"color：蓝色",price1:6666,price2:6666},
		{src:"img-gouwuche/shan.jpg",main:"Apple iPhoneXR(A2107) 256GB全网通-双卡双待",se:"color：珊瑚色",price1:7099,price2:7099}]
		
		fn9();
	
	
	var ii1=document.querySelectorAll('#hetian52 .shangpin li .i1');	
	$('#hetian52 .shangpin li .i1').click(function(){
		if($(this).attr('flag')==='wu'){
			$(this).css({background:'blue'}).attr("flag","you");
		}else{
			$(this).css({background:'#FFF'}).attr("flag","wu");
		}
		var k=0
		for(var i=0;i<$('#hetian52 .shangpin li .i1').length;i++){
			if(ii1[i].getAttribute('flag')=='you'){
				k++;
			}
			if(k==$('#hetian52 .shangpin li .i1').length){
				$('.qqq').css({background:'url()'}).attr("flag","you");
			}else{
				$('.qqq').css({background:''}).attr("flag","wu");
			}
		}
		fn8()
	})
	
	
	$('.ijia').click(function(){
		var val=$(this).siblings('input')[0].value;
		val++;
		$(this).siblings('input')[0].value=val;		
		$(this).parent().siblings('.price2').children('.pi2').html($(this).parent().siblings('.price1').children('.pi1').html()*val);
		fn8();
	})

	$('.ijian').click(function(){
		var val=$(this).siblings('input')[0].value;
		if(val==1){
			return
		}
		val--;
		$(this).siblings('input')[0].value=val;
		$(this).parent().siblings('.price2').children('.pi2').html($(this).parent().siblings('.price1').children('.pi1').html()*val);
		fn8();
	})

	$('.qqq').click(function(){
		if($(this).attr('flag')==='wu'){
			$('.qqq').css({background:'red'}).attr("flag","you");
			$('#hetian52 .shangpin li .i1').css({background:'url()'}).attr("flag","you");
			$('#hetian52 .shangpin li .i1').css({background:'blue'}).attr("flag","you");
		}else{
			$('.qqq').css({background:'#FFF'}).attr("flag","wu");
			$('#hetian52 .shangpin li .i1').css({background:''}).attr("flag","wu");
		}
		fn8()
	})




	function fn8(){
		var price=0
		var num=0
		var ii1=document.querySelectorAll('#hetian52 .shangpin li .i1');
		for(var i=0;i<$('#hetian52 .shangpin li .i1').length;i++){
			if(ii1[i].getAttribute('flag')=='you'){
				price+=parseInt($(ii1[i]).siblings('.price2').children('.pi2').html());
				num+=parseInt($(ii1[i]).siblings('.popo').children('input')[0].value);
			}
		}
		yixuan.innerHTML=num;
		zongjia.innerHTML=price;
	}
    $('#hetian52 .shan').click(function(){
       $(this).parent().remove();
       fn8();
    })




	function fn9(){
		var str=''
		$.each(data,function(index,item){
			str+=`<li>
					<i class="i1" flag="wu"></i>
					<img src="${item.src}" alt="">
					<div class="miaoshu" style="color:deeppink;">${item.main}</div>
					<div class="se" style="color: green;font-size:18px;">${item.se}</div>
					<div class="price1"><i>￥</i><i class="pi1" style="color:red;">${item.price1}</i></div>
					<div class="popo"><i class="ijian">-</i><input type="text" value="1"><i class="ijia">+</i></div>
					<div class="price2"><i>￥</i><i class="pi2" style="color:cyan;">${item.price2}</i></div>
					<div class="shan"  style="color: chartreuse;font-size:18px;">删除按钮</div>
				</li>`
		})
		$('#hetian52 .shangpin').html(str)
	}
