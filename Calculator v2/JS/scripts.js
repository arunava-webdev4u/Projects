var buttons = document.querySelectorAll("button");  // select all the buttons

buttonClickSound();

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
