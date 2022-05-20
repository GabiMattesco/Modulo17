class MyFormScreen {
    get #myname(){
        return $('~text-input')
    }

    async geMyName(){
        return await this.#myname.getText()
    }

}

module.exports = new MyFormScreen()