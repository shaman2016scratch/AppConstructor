import { DomElement } from "../types.js"

class ExtensionDOM {
    constructor () {
        this.blocks = {
            "getBody": { blockType: "DomElement", function: this.getBody },
            "createElement": { blockType: "DomElement", function: this.createElement }
        }
        this.reporters = {
            "getBody": { blockType: "DomElement", function: this.getBody },
            "createElement": { blockType: "DomElement", function: this.createElement }
        }
    }

    getBody () {
        return document.body
    }

    createElement (args) {
        return new DomElement(args.type).element
    }

    setAttribute (args) {
        args.element.setAttribute(args.name, args.value)
        return args.element
    }

    setTextContent (args) {
        args.element.textContent = args.value
        return args.element
    }

    setContent (args) {
        args.element.innerHTML = args.value
        return args.element
    }

    appendChild (args) {
        args.element.appendChild(args.child)
        return args.element
    }

    textContent (args) {
        return args.element.textContent
    }

    content (args) {
        return args.element.innerHTML
    }
}

export default ExtensionDOM
