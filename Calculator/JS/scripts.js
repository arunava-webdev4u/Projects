var buttons = document.querySelectorAll("button");  // select all the buttons
var inputbar = document.querySelector("input"); // select display of the calculator
var screenText = "";

buttonClickSound();

for(let item of buttons)
{
    item.addEventListener('click', (el) => {
        buttonText = el.target.innerText;

        if (buttonText == 'x'){
            buttonText = '*';
            screenText += buttonText;
            inputbar.value += screenText;
        }
        else if (buttonText == 'C'){
            screenText = "";
            inputbar.value = screenText;
        }
        else if (buttonText == '='){
            inputbar.value = eval(screenText)
        }
        else{
            screenText += buttonText;
            inputbar.value = screenText;
        }
    });
}

function buttonClickSound() //  adds the button sound effects
{
    for (let i = 0; i <=15; i++)
    {
        buttons[i].addEventListener('click', clickPlay);
    }
    function clickPlay() {
        var audio = document.querySelector("#clk");
        audio.play();
    }
}

function exp()
{
    alert("working");
}
