let video = document.querySelector('.player__video');
let speed=document.querySelector('.speed-bar');
let backward=document.querySelector('.rewind');
let forward=document.querySelector('.forward');

forward.addEventListener("click",forwardFn);
backward.addEventListener("click",backwardFn);


speed.addEventListener("click",(e)=>{
	if(speed.innerHTML=="1x"){
		speed.innerHTML="2x";
		video.playbackRate=2;
	}
	else if(speed.innerHTML=="2x"){
		speed.innerHTML="4x";
		video.playbackRate=4;
	}
	else if(speed.innerHTML=="4x"){
		speed.innerHTML="0.5x";
		video.playbackRate=0.5;
	}
	else {
		speed.innerHTML="1x";
		video.playbackRate=1;
	}
})
function backwardFn(e){
	video.currentTime=video.currentTime-10;
}    
function forwardFn(e){
	video.currentTime=video.currentTime+25;
}


