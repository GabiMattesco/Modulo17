class FormScreen {
    get #InputField(){
    return $('~text-input')}
    
    get #buttonactive() 
    { return $('//android.view.ViewGroup[@content-desc="button-Active"]/android.view.ViewGroup')}

    get #confirmationbutton()
    { return $('//android.widget.Button[2]')}



    async setInputField(text){
       await this.#InputField.setValue(text)

    }
    async clickbuttonactive (){
        await driver.execute('mobile:scroll', {direction: 'down', strategy: 'accessibility id', selector: '~button-Active'})
        await this.#buttonactive.click()
        await this.#confirmationbutton.click()
    }

    
    
}  


module.exports = new FormScreen()