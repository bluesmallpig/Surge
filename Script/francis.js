{
	"id": "francis.app.sub",
	"name": "francis应用订阅",
	"author": "@francis",
	"icon": "",
	"repo": "https://github.com/bluesmallpig/Surge",
	"apps": [{
        id: 'txnews',
        name: '腾讯新闻',
        keys: ['sy_signurl_txnews', 'sy_cookie_txnews', 'video_txnews', 'sy_signurl_txnews2', 'sy_cookie_txnews2', 'video_txnews2'],
        author: '@Francis',
        repo: 'https://github.com/Sunert/Scripts/blob/master/Task/txnews.js',
        icons: ['https://raw.githubusercontent.com/Orz-3/mini/master/txnews.png', 'https://raw.githubusercontent.com/Orz-3/task/master/txnews.png']
		},
		{
			"id": "testflight",
			"name": "tf监控",
			"keys": [],
			"settings": [{
				"id": "appkey",
				"name": "监控appkey",
				"val": "",
				"type": "textarea",
				"placeholder": "VCIvwk2g,1SyedSId",
				"autoGrow": true,
				"rows": 1,
				"desc": "以英文逗号分隔多个key"
			}, {
				"id": "testflight_isnotify",
				"name": "是否静默通知",
				"val": "",
				"type": "textarea",
				"placeholder": "true or false",
				"autoGrow": true,
				"rows": 1,
				"desc": "false没有tf位置将不会通知只记录日志"
			}],
			"author": "@syzzzf",
			"repo": "https://raw.githubusercontent.com/songyangzz/QuantumultX/master/elem/elemSign.js",
			"icons": ["https://raw.githubusercontent.com/Orz-3/task/master/testflight.png", "https://raw.githubusercontent.com/Orz-3/task/master/testflight.png"]
		}
	]
}
