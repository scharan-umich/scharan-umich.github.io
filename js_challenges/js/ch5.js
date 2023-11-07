thumbnails = document.querySelectorAll(".thumbnail")

for (var i = 0; i < thumbnails.length; i++) {
    console.log("Adding image listener index...")
    console.log(thumbnails[i])

    thumbnails[i].addEventListener('mouseover', function() {
        document.querySelector("#display").style.backgroundImage = "url('" + this.src + "')"
        document.querySelector("#display").innerHTML = this.alt
    });

    thumbnails[i].addEventListener('focus', function() {
        document.querySelector("#display").style.backgroundImage = "url('" + this.src + "')"
        document.querySelector("#display").innerHTML = this.alt
    });

    thumbnails[i].setAttribute("tabindex", "0")

}