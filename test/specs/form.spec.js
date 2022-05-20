const dropdownScreen = require("../screens/dropdown.screen");
const formScreen = require("../screens/form.screen");
const homeScreen = require("../screens/home.screen");
const myformScreen = require("../screens/myform.screen");

describe('Access Form Panel', () => {
    it('should fill form', async () => {
        await homeScreen.clickMenuForms()
        await formScreen.setInputField('Gabriela')
        await dropdownScreen.setSelectAnItem('This app is awesome')
        await formScreen.clickbuttonactive() 

        expect(await myformScreen.geMyName()).toEqual('Gabriela')
    });
})

