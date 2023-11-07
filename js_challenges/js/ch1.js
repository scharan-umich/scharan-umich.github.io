console.log("Checking Challenge 1...")

document.querySelector("#subscribe").addEventListener("click", function() {

    console.log("Checkbox checked?")
    console.log(this.checked)

    if (this.checked){
        console.log("Showing email box...")
        document.querySelector("#emailDiv").style.display="block"
    }
    else{
        document.querySelector("#emailDiv").style.display="none"
    }

    console.log("Challenge 1 complete!")

});