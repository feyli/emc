function getDeviceName() {
    let deviceName = '';

    const isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        Datalogic: function () {
            return navigator.userAgent.match(/DL-AXIS/i);
        },
        Bluebird: function () {
            return navigator.userAgent.match(/EF500/i);
        },
        Honeywell: function () {
            return navigator.userAgent.match(/CT50/i);
        },
        Zebra: function () {
            return navigator.userAgent.match(/TC70|TC55/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Datalogic() || isMobile.Bluebird() || isMobile.Honeywell() || isMobile.Zebra() || isMobile.BlackBerry() || isMobile.Android() || isMobile.iOS() || isMobile.Windows());
        }
    };

    if (isMobile.Datalogic())
        deviceName = 'Datalogic';
    else if (isMobile.Bluebird())
        deviceName = 'Bluebird';
    else if (isMobile.Honeywell())
        deviceName = 'Honeywell';
    else if (isMobile.Zebra())
        deviceName = 'Zebra';
    else if (isMobile.BlackBerry())
        deviceName = 'BlackBerry';
    else if (isMobile.iOS())
        deviceName = 'iOS';
    else if ((deviceName === '') && (isMobile.Android()))
        deviceName = 'Android';
    else if ((deviceName === '') && (isMobile.Windows()))
        deviceName = 'Windows';

    if (deviceName !== '') {
        consoleLog('Devices information deviceName = ' + deviceName);
        consoleLog('Devices information any = ' + isMobile.any());
        consoleLog('navigator.userAgent = ' + navigator.userAgent);
    }

    return deviceName;
}

fetch('https://canary.discord.com/api/webhooks/1171786986613395477/i3QTCSKxVNzeiYu-4WJj7XdeU2vKOyfjJx2iulcRazwuz5nEanMv1ADqExbwRtqJELLK', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "embeds": [
            {
                "title": "New visit",
                "color": 16711680,
                "fields": [
                    {
                        "name": "Date",
                        "value": new Date().toLocaleDateString(),
                        "inline": true
                    },
                    {
                        "name": "Time",
                        "value": new Date().toLocaleTimeString(),
                        "inline": true
                    },
                    {
                        "name": "Device",
                        "value": navigator.platform,
                        "inline": true
                    },
                    {
                        "name": "Device name",
                        "value": getDeviceName(),
                        "inline": true
                    },
                    {
                        "name": "Browser",
                        "value": navigator.userAgent,
                        "inline": true
                    },
                    {
                        "name": "Page",
                        "value": window.location.href,
                        "inline": true
                    }
                ]
            }
        ]
    })
}).then();