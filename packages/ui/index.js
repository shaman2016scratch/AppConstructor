import { root, resultProject } from "./dom.js";
import { UIButton } from "./ui-classes.js";
import Vm from "../vm/index.js";

window.category = ""

const menuButton1 = new UIButton("Add block")

root.innerHTML = `
    <h1 style="text-align: center">App Constructor</h1>
    <p>Category: <select id="category">
        <option value="dom">DOM</option>
        <option value="events">Events</option>
        <option value="managment">Managment</option>
        <option value="operators">Operators</option>
        <option value="console">Console</option>
    </select><button onclick="selectCategory(document.getElementById('category').value)">Select</button></p>
    <p>Block: <select id="block">
        <option>Select category</option>
    </select></p>
    ${menuButton1.toString()}<button>Save project</button><button>Package project</button
`

resultProject.innerHTML = `
    <iframe src="data:text/html,<html><head></head><body>Loading</body></html>"></iframe>
`

let result = `<html>
    <head><title>Builded App</title></head>
    <body>
        <div id="root">
            Please, enable JavaScript
        </div>
        <script></script> <-- Script 1 -->
    </body>
</html>`

const renderResult = () => {
    resultProject.innerHTML = `
        <iframe src="data:text/html,${result}"></iframe>
    `
}

window.renderBlocksInList = () => {
    switch (window.category) {
        case "dom":
            document.getElementById("block").innerHTML = `
                <option value="dom_getBody">Get Body</option>
                <option value="dom_createElement">Create element</option>
            `
            break
        case "events":
            document.getElementById("block").innerHTML = `
                <option>No blocks</option>
            `
            break
        case "managment":
            document.getElementById("block").innerHTML = `
                <option>No blocks</option>
            `
            break
        case "operators":
            document.getElementById("block").innerHTML = `
                <option value="operators_plus">Plus</option>
                <option value="operators_minus">Minus</option>
            `
            break
        default:
            document.getElementById("block").innerHTML = `
                <option>No blocks</option>
            `
    }
}

window.selectCategory = (category2) => {
    window.category = category2
    renderBlocksInList()
}
