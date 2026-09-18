class UIButton {
    constructor (label) {
        this.element = document.createElement("button")
        this.element.innerHTML = label
        this.label = label
    }

    toString () {
        return `<button>${label}</button>`
    }
}

export {
    UIButton
}