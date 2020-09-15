$(function(){		
	var listA = $("#list_num>a");
	var li = $("#banner").find("li");			
	var i = 0;
	var playOn = false;
	var roll;
	li.hide();	
	listA.click(function(){
		var index = $(this).index();
		if(listA.state){
			stop();
			imgOff(listA.state);
			imgOn(this);
			$(li.state).hide();
			$(li[index]).show();
			i = index;						
			play();
		}else{
			imgOn(this);
			$(li[index]).show();
			play();
		}					
		listA.state = this;	
		li.state = li[index];	
		return false;		
	});		
	$(".left").click(function(){
		i--;
		if(i<0){
			i = listA.length-1;
		}
		listA[i].click();						
	});			
	$(".right").click(function(){
		i++;
		if(i>listA.length-1){
			i = 0;
		}
		listA[i].click();
	});
	$(".stop").click(function(){		
		stop();				
	});			
	$(".play").click(function(){
		play();				
	});	
	function play(){
		if(!playOn){
			playOn = true;
			roll = setInterval(function(){
				$(".right").click();	
			},2000);
		}
	}
	function stop(){
		if(playOn){
			playOn = false;
			clearInterval(roll);
		}
	}	
	function imgOn(t){				
		$(t).find("img").attr("src",$(t).find("img").attr("src").replace("off","on"));
	}
	function imgOff(t){
		$(t).find("img").attr("src",$(t).find("img").attr("src").replace("on","off"));			
	}
	listA[0].click();
});