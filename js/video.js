var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Old Video speed is" +  video.playbackRate);
	video.playbackRate = video.playbackRate - (video.playbackRate * 0.05) ;
	console.log("New Video speed is " +  video.playbackRate);

});


document.querySelector("#faster").addEventListener("click", function() {
	console.log("Old Video speed is " +  video.playbackRate);
	video.playbackRate = video.playbackRate + (video.playbackRate * 0.05);
	console.log("New Video speed is " +  video.playbackRate);

});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = video.currentTime + 15;
	console.log("Current time is " +  video.currentTime);
	video.loop = true;

});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute"
		console.log("mute");
	}
	else {
	video.muted = false;
	document.querySelector("#mute").innerHTML = "Mute"
	console.log("unmute");
	}
});


document.querySelector("#slider").addEventListener("click", function() {
	video.volume = document.querySelector('#slider').value / 100;
	console.log("Current volume is " + video.volume);
});


document.querySelector("#slider").addEventListener("click", function() {
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	console.log("Current volume is " +  video.volume);
});


document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("oldSchool effect added");

});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("oldSchool effect removed");

});

