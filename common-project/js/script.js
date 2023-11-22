var video = document.getElementById("video");

document.querySelector("#video").addEventListener("mouseover", function() {video.play();});

document.querySelector("#video").addEventListener("mouseout", function() {video.pause();});