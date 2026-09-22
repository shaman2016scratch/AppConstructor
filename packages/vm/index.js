import { DomElement } from "./src/types.js";

import ExtensionDOM from "./src/blocks/dom.js";
import ExtensionOperators from "./src/blocks/operators.js";

import ExtensionsApi from "./src/util/extensions-api.js";

const blocks = {
    DOM: new ExtensionDOM().blocks,
    operators: new ExtensionOperators().blocks
}

const reporters = {
    DOM: new ExtensionDOM().reporters
}

const blockMap = {
    "dom_getBody": blocks.DOM.getBody,
    "dom_createElement": blocks.DOM.createElment,

    "operators_plus": blocks.operators.plus,
    "operators_minus": blocks.operators.minus
}

const reporterMap = {}

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
        this.reporters = reporters
        this.reporterMap = reporterMap
    }
}

export default Vm
