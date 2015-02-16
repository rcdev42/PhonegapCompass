
// https://github.com/christocracy/cordova-plugin-background-geolocation/blob/37f2cd9f6be82ca8ea3046c246b1866d4a669f06/README.md
// http://www.joshmorony.com/background-geolocation-with-phonegap-build/
var watchPositionOptions = { frequency: 3000, enableHighAccuracy: true };
var watchPositionBackground = null;

var watchPosition_onSuccess = function (location)
{
    $('#lat').text(location.latitude);
    $('#lng').text(location.longitude);

    watchPositionBackground.finish();
};

var watchPosition_onError = function (error)
{
    console.log('watchPosition_onError: ' + error);
};

document.addEventListener('deviceready', watchPosition_onDeviceReady, false);

function watchPosition_onDeviceReady()
{
    // init gps
    window.navigator.geolocation.getCurrentPosition(function (location)
    {
        console.log('Location from Phonegap');
    });

    watchPositionBackground = window.plugins.backgroundGeoLocation;

    watchPositionBackground.configure
    (
        watchPosition_onSuccess,
        watchPosition_onError,
        {
            desiredAccuracy: 10,
            stationaryRadius: 10,
            distanceFilter: 30,
            debug: true
        }
    );

    watchPositionBackground.start();
}




