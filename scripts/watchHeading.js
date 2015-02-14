
var watchHeadingId = null;
var watchHeadingOptions = { frequency: 50 };

var watchHeadingNewDirection = '';
var watchHeadingLastDirection = '';

document.addEventListener('deviceready', watchHeading_onDeviceReady, false);

function watchHeading_onDeviceReady()
{
    watchHeadingId = navigator.compass.watchHeading(watchHeading_onSuccess, watchHeading_onError, watchHeadingOptions);
}

function watchHeading_onSuccess(heading)
{
    $('#needle').rotate(-1 * heading.magneticHeading);

    watchHeadingLastDirection = watchHeadingNewDirection;

    if (heading.magneticHeading >= 315 || heading.magneticHeading <= 45)
    {
        watchHeadingNewDirection = 'north';
    }
    else if (heading.magneticHeading > 45 && heading.magneticHeading < 135)
    {
        watchHeadingNewDirection = 'east';
    }
    else if (heading.magneticHeading >= 135 && heading.magneticHeading <= 225)
    {
        watchHeadingNewDirection = 'south';
    }
    else if (heading.magneticHeading > 225 && heading.magneticHeading < 315)
    {
        watchHeadingNewDirection = 'west';
    }

    if (watchHeadingLastDirection != watchHeadingNewDirection)
    {
        playAudio(watchHeadingNewDirection + 'Sound');
    }
}

function watchHeading_onError(error)
{
    console.log('watchHeading_onError: ' + error);
}

