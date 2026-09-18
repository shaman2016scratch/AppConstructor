import { DomElement } from "./src/types.js";
import ExtensionDOM from "./src/blocks/dom.js";

const blocks = {
    DOM: new ExtensionDOM().blocks
}

const blockMap = {
    "dom_getBody": blocks.DOM.getBody
}

class Vm {
    constructor () {
        this.DomElement = DomElement
        this.blocks = blocks
        this.blockMap = blockMap
    }
}

export default Vm