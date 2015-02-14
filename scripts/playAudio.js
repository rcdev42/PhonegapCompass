
// http://stackoverflow.com/questions/21638741/html5-audio-not-playing-in-phonegap-app-possible-to-use-media
function playAudio(id)
{
    var audioElement = document.getElementById(id);
    var url = audioElement.getAttribute('src');

    var my_media = new Media(url,
        // success callback
        function () { console.log("playAudio():Audio Success"); },
        // error callback
        function (err) { console.log("playAudio():Audio Error: " + err); }
    );

    // Play audio
    my_media.play();
}

//    function playAudio(id)
//    {
//        var sound = document.getElementById(id);
//
//        if (!sound.paused)
//        {
//            sound.pause();
//            sound.currentTime = 0.0;
//        }
//
//        sound.currentTime = 0.1;
//        sound.play();
//    }
