
		var reg=/^\d{11}$/
		var flag=false
		var flag2=false
		inp.onfocus=function(){
			pp4.style.display='none'
			pp3.style.display='block'
		}
		inp.onblur=function(){
			pp3.style.display='none'
			var val=inp.value
			if(reg.test(val)){
				flag=true
			}else{
				pp4.style.display='block'
			}
		}
		btn.onclick=function(){
			var val=inp.value
			if(reg.test(val)){
				flag=true
				$('#banner .phone').css({display:'none'})
				$('#banner .i6').css({backgroundPosition:'0 -130px'})
				$('#banner .i4').css({backgroundPosition:'0 -200px'})
				$('#sec').css({display:'block'})
			}else{
				pp4.style.display='block'
			}
		}
		inp1.onfocus=function(){
			$('#sec .tishi1 .p1').css({display:'block'})
			$('.tishi1 .p1 span').html("支持中文、英文、数字、“-”、“_”的组合，4-20个字符")
		}
		inp1.onblur=function(){
			$('#sec .tishi1 .p1').css({display:'none'})
		}

		inp2.onfocus=function(){
			$('#sec .tishi2 .p1').css({display:'block'})
			$('.tishi2 .p1 span').html("建议使用字母、数字和符号两种及以上的组合，6-20个字符").css({color:'#c5c5c5'})
		}
		var reg1=/^\w{6,20}$/;
		inp2.onkeyup=function(){
			var val=inp2.value
			if(reg1.test(val)){
				if(val.length<=10){
					$('.tishi2 .p1 span').html("密码强度过低").css({color:'red'})
					flag2=true
				}else if(/^\d{10,20}$/.test(val)||/^[a-z]{10,20}$/.test(val)){
					$('.tishi2 .p1 span').html("密码强度中").css({color:'orange'})
					flag2=true
				}else if(/^\d{1,}[a-z]{1,}$/||/^\[a-z]{1,}\d{1,}$/){
					$('.tishi2 .p1 span').html("密码强度高").css({color:'green'})
					flag2=true
				}
			}else{
				flag2=false
			}
		}
		inp3.onfocus=function(){
			$('#sec .tishi3 .p1').css({display:'block'})
			$('.tishi3 .p1 span').html("请再次输入密码").css({color:'#c5c5c5'})
		}
		inp3.onblur=function(){
			var val=inp2.value
			var val2=inp3.value
			if(val!=val2){
				$('.tishi3 .p1 span').html("密码不匹配").css({color:'orange'})
				flag2=false
			}else{
				flag2=true
				$('.tishi3 .p1 span').html("")
			}
		}
		btn1.onclick=function(){
			if(inp1!=''&&inp2!=''&&inp3!=''&&flag2){
				$('#sec').css({display:'none'})
				$('#banner .i7').css({backgroundPosition:'0 -130px'})
				$('#banner .i5').css({backgroundPosition:'0 -200px'})
				$('#thr').css({display:'block'})

			}			
		}