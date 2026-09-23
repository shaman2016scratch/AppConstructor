class UIButton {
    constructor (label) {
        this.element = document.createElement("button")
        this.element.innerHTML = label
        this.label = label
    }
}

export {
    UIButton
}
