var video = document.querySelector("#player1");

// Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	console.log("Auto play is set to false");
	video.loop = false;
	console.log('loop is set to false');

});

// Play the video and update the volume information.
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// Pause the video.
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= .9;
	console.log("Speed is " + video.playbackRate);
});

// Increase the current video speed each time the button is clicked and log the new speed to the console. 
// Not completed.
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate *= 10/9;
	console.log("Speed is " + video.playbackRate);
});

// Advance the current video by 10 seconds.  
// If the video length has been exceeded go back to the start of the video - no farther. Log the current location of the video.
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime += 10;
	}
	console.log("Video current time is " + video.currentTime);
});

// Mute/unmute the video and update the text in the button.
document.querySelector('#mute').addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		document.querySelector('#mute').innerHTML = 'Unmute';
		console.log("Muted");
	}
	else {
		video.muted = false;
		document.querySelector('#mute').innerHTML = 'Mute';
		console.log("Unmuted");
	}
});

// Change the volume based on the slider and update the volume information.
document.querySelector("#slider").addEventListener("change", function() {
	console.log(this.value);
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

// Remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});

// Deeper Questions…
// 1. Can you add something that shows the current runtime of the video?


// 2. Can you have the video element show a thumbnail?


// 3. Can you use a different video and get it to work?


// 4. Is your player accessible?  Including the slider? 



