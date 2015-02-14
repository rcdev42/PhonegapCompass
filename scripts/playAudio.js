

function playAudio(id)
{
    var sound = document.getElementById(id);

    if (!sound.paused)
    {
        sound.pause();
        sound.currentTime = 0.0;
    }

    sound.currentTime = 0.1;
    sound.play();
}
