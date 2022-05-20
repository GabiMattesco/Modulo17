const { join } = require('path')
const allure = require('allure-commandline')

exports.config = {
    //hostname: 'localhost',
    //port: 4723,
    //path: '/wd/hub',
    user: "gabrielamattesco_m8Bfhp",
    key: "bsFJVq54eqsdw1grvH57",

//    services: ['appium'],
    services: ['browserstack'],
    specs: [
        './test/specs/**/*.spec.js'
    ],

    capabilities: [{
        //"platformName": "Android",
        //"platformVersion": "11.0",
        //"deviceName": "ebac-qe",
        //"automationName": "UiAutomator2",
        //"app": join(process.cwd(), './android/Android-NativeDemoApp-0.4.0.apk'),
        //"appWaitActivity": ".MainActivity"

        'app' : 'bs://c700ce60cf13ae8ed97705a55b8e022f13c5827c',
        'device' : 'Samsung Galaxy Note 20',
        'os_version' : '10.0',
        'project' : 'Meu primeiro projeto em Device Farm',
        'build' : 'browserstack-build-1',
        'name': 'teste_login'
    }],

    framework: 'mocha',
    mochaOpts: {
        timeout: 60000
    },
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }]
    ],
    onComplete: function () {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    afterStep: function (step, scenario, { error, duration, passed }, context) {
        driver.takeScreenshot()

    }

}