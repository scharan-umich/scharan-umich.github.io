function challenge1(element){
        console.log(element.checked)
        if (element.checked){
            document.querySelector("#emailDiv").style.display="block"
        }
        else{
            document.querySelector("#emailDiv").style.display="none"
    
        }
}


function challenge2(element){
    console.log(element.checked)

    bill = document.querySelector("#bill")
    home = document.querySelector("#home")
    console.log("Home value is" + home.value)
    console.log("Billing value is" + bill.value)
    if (element.checked){
        console.log("Set it")
        home.value = bill.value
        home.disabled = true
    }
    else{
        console.log("Unset it")
        home.value = ""
        home.disabled = false

    }
}


function challenge3(){
    var standing = null
    var grad_date = null


    var grad_date = document.querySelector('input[name="gradDate"]:checked')
    var standing = document.querySelector('input[name="standing"]:checked')


    console.log("Good job clicking the button")
    console.log("Grad date is", grad_date)
    console.log("Standing is", standing)

    if (grad_date == null || standing == null){
        alert("You must select a choice from each set of radio buttons")
        return false
    }
   
}

function challenge4(){
    console.log("here")
    nameField = document.querySelector("#name").value
    addrField = document.querySelector("#addr").value
    nameError = document.querySelector("#nameError")
    addrError = document.querySelector("#addrError")
   
    
    if (nameField.length ==0)
        nameError.classList.remove("errormsg")
    else
    nameError.classList.add("errormsg")
    

    if (addrField.length ==0)
        addrError.classList.remove("errormsg")
    else
        addrError.classList.add("errormsg")
    

    if (nameField.length ==0 || addrField.length ==0){
        return false
    }
    return true
    
}

function challenge5(element){
        console.log("Hovering")
        console.log(element.src)
        console.log(element.alt)

        document.querySelector("#display").style.backgroundImage = "url('" + element.src + "')"
        document.querySelector("#display").innerHTML = element.alt
    }

    function challenge5leave(element){

        console.log("Leaving")
            document.querySelector("#display").style.backgroundImage = ""
            document.querySelector("#display").innerHTML = "Hover over an image below to display the image and the alt text."
    }