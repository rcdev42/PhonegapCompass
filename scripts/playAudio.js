
// http://stackoverflow.com/questions/22515699/play-sound-on-phonegap-app-for-android
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

    // play
    my_media.play();
}
