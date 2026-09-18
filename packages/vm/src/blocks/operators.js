class ExtensionOperators {
    constructor () {
        this.blocks = {
            "plus": { blockType: "number", function: this.plus },
            "minus": { blockType: "number", function: this.minus }
        }
    }

    plus (args) {
        return Number(args.n1) + Number(args.n2)
    }

    minus (args) {
        return Number(args.n1) - Number(args.n2)
    }
}

export default ExtensionOperators