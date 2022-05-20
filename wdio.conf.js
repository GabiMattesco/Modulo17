const { join } = require('path')

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    mochaOpts: {
        timeout: 60000
    },
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "11.0",
        "deviceName": "ebac-qe",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), './android/Android-NativeDemoApp-0.4.0.apk'),
        "appWaitActivity": ".MainActivity"       
     
    }]
}