console.log("Checking Challenge 2...")

document.querySelector("#sameAddress").addEventListener("click", function() {

    console.log(this.checked)

    bill = document.querySelector("#bill")
    home = document.querySelector("#home")
    console.log("Home value is" + home.value)
    console.log("Billing value is" + bill.value)
    if (this.checked){
        console.log("Set it")
        home.value = bill.value
        home.disabled = true
    }
    else{
        console.log("Unset it")
        home.value = ""
        home.disabled = false

    }

});