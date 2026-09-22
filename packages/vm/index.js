import { DomElement } from "./src/types.js";

import ExtensionDOM from "./src/blocks/dom.js";
import ExtensionOperators from "./src/blocks/operators.js";

import ExtensionsApi from "./src/util/extensions-api.js";

const blocks = {
    DOM: new ExtensionDOM().blocks,
    operators: new ExtensionOperators().blocks
}

const blockMap = {
    "dom_getBody": blocks.DOM.getBody,
    "dom_createElement": blocks.DOM.createElment,

    "operators_plus": blocks.operators.plus,
    "operators_minus": blocks.operators.minus
}

class Vm {
    constructor () {
        this.DomElement = DomElement
        this.blocks = blocks
        this.blockMap = blockMap
        this.categories = {
            dom: ExtensionDOM,
            operators: ExtensionOperators
        }
        this.extensionAPI = ExtensionsAPI
    }
}

export default Vm
