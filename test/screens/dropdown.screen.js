class DropdownScreen {
    
    get #SelectAnItem(){
        return $('~Dropdown')
    }

    async setSelectAnItem(item){
        await this.#SelectAnItem.click()
        await $(`android=new UiSelector().text("${item}")`).click()
    }
}  


module.exports = new DropdownScreen()