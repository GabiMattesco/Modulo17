class HomeScreen {
    get enterAppForms(){
        return $('//android.widget.Button[@content-desc="Forms"]/android.widget.TextView[2]')
    }

    async clickMenuForms (){
        await this.enterAppForms.waitForDisplayed({timeout: 10000})
        await this.enterAppForms.click()
    }
}  


module.exports = new HomeScreen()