// Set "video" to the video player
var video = document.getElementById("player1")

// On load...
window.addEventListener("load", function() {
	console.log("Loading done!")
	video.load()
	// Turn off looping and autoplay
	video.loop = false
	video.autoplay = false
});

// Play
document.querySelector("#play").addEventListener("click", function() {
	console.log("Playing video...")
	video.play()
	// Update volume text
	document.getElementById("volume").textContent = (video.volume * 100) + "%"
});

// Pause
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pausing video...")
	video.pause()
});

//	Slow Down
// Set the playback rate to 90% of its current value (10% slower)
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slowing video down...")
	video.playbackRate *= 0.9;
	// Print new playback rate
	console.log("New playback rate: " + video.playbackRate);
});

// Speed Up
// Set the playback rate to 110% of its current value (10% faster)
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speeding video up...")
	video.playbackRate *= 1.1;
	// Print new playback rate
	console.log("New playback rate: " + video.playbackRate);
});

// Skip Forward 10 sec
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skipping forward 10 sec...")
	// If advancing 10 sec will end the video, reset to start
	if (video.currentTime + 10 > video.duration) {
		console.log("Exceeds video duration! Resetting to start...")
		video.currentTime = 0
	}
	// Otherwise just advance 10 sec
	else {video.currentTime += 10}
	console.log("New position: " + video.currentTime + " sec.")
});

// Mute
document.querySelector("#mute").addEventListener("click", function() {
	// If already muted, unmute and update text
	if (video.muted) {
		console.log("Video is muted, unmuting...")
		video.muted = false
		document.getElementById("mute").textContent = "Mute"
	}
	// Otherwise (if not muted), mute and update text
	else {
		console.log("Video is unmuted, muting...")
		video.muted = true
		document.getElementById("mute").textContent = "Unmute"
	}
});

// Volume slider
// Change volume of video based on slider position
document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing volume...")
	video.volume = document.getElementById("slider").value / 100
	document.getElementById("volume").textContent = (video.volume * 100) + "%"
	console.log("New volume is: " + (video.volume * 100) + "%")
});