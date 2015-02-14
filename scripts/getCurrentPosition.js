
var getCurrentPositionId = null;
var getCurrentPositionOptions = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 };
var getCurrentPositionErrorCount = 0;

document.addEventListener('deviceready', getCurrentPosition_onDeviceReady, false);

function getCurrentPosition_onDeviceReady()
{
    getCurrentPosition();
}

// watchPosition does not seem to be working
function getCurrentPosition()
{
    getCurrentPositionId = navigator.geolocation.getCurrentPosition(getCurrentPosition_onSuccess, getCurrentPosition_onError, getCurrentPositionOptions);
}

function getCurrentPosition_onSuccess(position)
{
    getCurrentPositionErrorCount = 0;

    $('#lat').text(position.coords.latitude);
    $('#lng').text(position.coords.longitude);

    setTimeout(function ()
    {
        getCurrentPosition();
    }, 1000);
}

function getCurrentPosition_onError(error)
{
    getCurrentPositionErrorCount++;

    console.log('getCurrentPosition_onError: ' + error);

    // try again?
    if (getCurrentPositionErrorCount < 5)
    {
        setTimeout(function ()
        {
            getCurrentPosition();
        }, 1000);
    }
}
