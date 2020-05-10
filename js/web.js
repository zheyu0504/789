// JavaScript Document

function scroll(){
	var top = document.documentElement.scrollTop;
	if(top<700){
		$("#div1").stop().animate({backgroundSize:"100%"},500);
	}
	else if(top<=400){
		$("#div1").stop().animate({backgroundSize:((top*52/3)+100)+"%"},500);
	}
	else{
		$("#div1").stop().animate({backgroundSize:"5300%"},500);
	}
	
	if(top>=0 && top<2000){
		$("#div3_1").stop().animate({left:top - 3000 +'px'},500);
		$("#div3_2").stop().animate({left:top + 3000 +'px'},500);
	}
	else{
		$("#div3_1").stop().animate({left:'0px'},500);
		$("#div3_2").stop().animate({left:'0px'},500);
	}
	
	$("#nav1").removeClass("active");
	$("#nav2").removeClass("active");
	$("#nav3").removeClass("active");
	$("#nav4").removeClass("active");
	$("#nav5").removeClass("active");
	$("#nav6").removeClass("active");
	
	if(top<730){
		$("#nav1").addClass("active");
		$("#nav6").addClass("active");
	}
	else if(top<1550){
		$("#nav2").addClass("active");
	}
	else if(top<2480){
		$("#nav3").addClass("active");
	}
	else if(top<3450){
		$("#nav4").addClass("active");
	}
	else{
		$("#nav5").addClass("active");
	}

}

function scroll_top(num){
	$("html,body").animate({scrollTop:num},500);
}

function change_img(name){
	document.getElementById("big_img").src = 'pic/photo/' + name + '.png';
	$("#big_img").stop().fadeOut(0).fadeIn(1000);
	
	if(name==1){
		document.getElementById("div2_1").innerHTML = '風土';
		document.getElementById("div2_2").innerHTML = '兩年來季緣走訪臺灣，在松崗大禹嶺一帶，海拔1800-2300公尺處，找到合作的茶廠。這裡採自然農法栽種，使用高級有機肥料，也因位處高山害蟲少，無須施用農藥。土壤與氣候都有自己獨特的風貌，非常適合種植茶葉，進而產出專屬季緣的獨特茶味。';
	}
	if(name==2){
		document.getElementById("div2_1").innerHTML = '技術';
		document.getElementById("div2_2").innerHTML = '有了先天的優良茶種，更不能忽略後天的努力。從養分的篩選到水質的提供，無一不透過嚴格的種植管理把關，確保每一株茶種都受到同等高規格的待遇，進而採摘而成優良茶菁。最後，透過專業製茶師傅的好工夫，讓茶發揮本性，散發絕佳香氣。';
	}
	if(name==3){
		document.getElementById("div2_1").innerHTML = '手法';
		document.getElementById("div2_2").innerHTML = '好的茶葉就該有對的煮法，季緣針對不同茶葉給予適當的沖煮方式，以生鐵壺煮水軟化水質，依照茶葉特性挑選適合器具並在沖煮過程中找出適當的溫度。依據茶葉特性，從茶器、水質、溫度上給予適情適性的沖煮待遇，讓每一杯季緣的茶都富含溫度與層次。';
	}
	if(name==4){
		document.getElementById("div2_1").innerHTML = '品茶';
		document.getElementById("div2_2").innerHTML = '有了專業的製茶、煮茶流程，品茶是更是不容忽視的一環。季緣門市將提供舒服的環境與專業的茶品解說，讓每一位來訪的顧客，都能在此刻放下喧擾，靜下心，好好品嘗一杯優質季緣好茶。';
	}
}

function msg_add(){
	$("#msg").stop().fadeIn(0).fadeOut(3000);
	document.getElementById("msg2").innerHTML = document.getElementById("msg3").value + ":" + document.getElementById("msg4").value + '<br>' + document.getElementById("msg2").innerHTML;
}