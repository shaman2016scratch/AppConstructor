class DomElement {
    constructor (value) {
        this.element = document.createElement(value.name)
        for (let i = 0; i < Object.keys(value.args).lenght; i++) {
            this.element.setAttribute(Object.keys(value.args)[i], value.args[Object.keys(value.args)[i]])
        }
    }
}

export {
    DomElement
}
