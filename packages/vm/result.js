class Result {
    constructor () {
        this.script = ""
        this.name = "Builded App"
        this.placeholderJS = "Please, enable JavaScript"
    }

    result () {
        return `<html>
            <head>
                <title>${this.name}</title>
            </head>
            <body>
                <div id="root">
                    ${this.placeholderJS}
                </div>
                <script>${this.script}</script> <-- Script 1 -->
            </body>
        </html>`
    }
}

const resultRun

export {
    Result,
    resultRun
}
