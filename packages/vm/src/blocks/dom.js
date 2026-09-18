import { DomElement } from "../types.js"

class ExtensionDOM {
    constructor () {
        this.blocks = {
            "getBody": { blockType: "DomElement", function: this.getBody },
            "createElement": { blockType: "DomElement", function: this.createElement }
        }
    }

    getBody () {}

    createElement () {}
}

export default ExtensionDOM