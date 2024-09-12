let button = document.querySelector("button");

button.onclick = function(){
    let inputs = document.querySelectorAll("input");

    
    for(input of inputs){
        console.log(`${input.id} = ${input.value}`);
    }

    alert("You have submitted your details.");
}
