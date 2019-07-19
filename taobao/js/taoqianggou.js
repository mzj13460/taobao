var daojishi=document.getElementById("daojishi");
daojishis(2020,05,21);

			function daojishis(x,y,z){
				var djs="";
				var d=new Date();
				var d1=new Date(2052,05,02);
				var timeC=d1.getTime()-d.getTime();
				timeC/=1000;
				var day=parseInt(timeC/60/60/24);
				var hours=parseInt((timeC-day*24*60*60)/60/60);
				var min=parseInt((timeC-day*24*60*60-hours*60*60)/60);
				var secs=parseInt(timeC-day*24*60*60-hours*60*60-min*60); 
				djs+=`
					<span id="hours" style="display:inline-block;background:pink;width:20px;height:20px;color:orangered;
					text-align:center;line-height:20px;border-radius:2px;font-weight:600;">
					${addZero(hours)}</span><span style="color:orangered;">${":"}</span>
					<span id="min" style="display:inline-block;background:pink;width:20px;height:20px;color:orangered;
					text-align:center;line-height:20px;border-radius:2px;font-weight:600;">
					${addZero(min)}</span><span style="color:orangered;">${":"}</span>
					<span id="secs" style="display:inline-block;background:pink;width:20px;height:20px;color:orangered;
					text-align:center;line-height:20px;border-radius:2px;font-weight:600;">
					${addZero(secs)}</span>`
				daojishi.innerHTML=djs;		}
			
			function addZero(n){
			    return n<10?"0"+n:n;			}

setInterval(function(){daojishis(2020,05,21)},1000);