let screen = document.getElementById("screen");
let buttons = document.querySelectorAll(".button");
let screenValue="";
for (let button of buttons) {
    button.addEventListener("click", (e) => {
        let buttonText = e.target.innerText;
        console.log(buttonText);
        if (buttonText == "x") {
            buttonText = '*';
            screenValue+=buttonText
            screen.value=screenValue
        }
        else if(buttonText=="A/C"){
            screenValue="";
            screen.value=screenValue;

        }
        else if(buttonText=="="){
            screen.value=eval(screenValue);
            
        }
        else{
            screenValue += buttonText;
            console.log("else");
            screen.value=screenValue
        }

    })
}