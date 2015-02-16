
// http://www.joshmorony.com/background-geolocation-with-phonegap-build/
var watchPositionOptions = { frequency: 3000, enableHighAccuracy: true };
var watchPositionBackground = null;

var watchPosition_onSuccess = function (location)
{
    runtap.util.gps.onBackgroundSuccess(location);

    $('#lat').text(runtap.util.gps.lastLatitude);
    $('#lng').text(runtap.util.gps.lastLongitude);
};

var watchPosition_onError = function (error)
{
    console.log('watchPosition_onError: ' + error);
};

document.addEventListener('deviceready', watchPosition_onDeviceReady, false);

function watchPosition_onDeviceReady()
{
    navigator.geolocation.watchPosition(runtap.util.gps.onSuccess, runtap.util.gps.onError, options);

    watchPositionBackground = navigator.plugins.backgroundGeoLocation;

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




