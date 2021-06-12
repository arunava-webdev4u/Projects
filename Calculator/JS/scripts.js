var buttons = document.querySelectorAll("button");
var inputbar = document.querySelector("input");
buttonClickSound();

for(let item of buttons)
{
    item.addEventListener('click', (el) => {
        buttonText = el.target.innerText;
    })
}

function buttonClickSound()
{
    for (let i = 0; i <=15; i++)
    {
        buttons[i].addEventListener('click', clickPlay);
    }
    function clickPlay() {
        var audio = document.querySelector("audio");
        audio.play();
    }
}

function exp()
{
    alert("working");
}