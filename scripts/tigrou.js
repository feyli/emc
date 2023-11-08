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
                        "value": navigator.appVersion,
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