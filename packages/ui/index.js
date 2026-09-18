import { root, resultProject } from "./dom.js";
import Vm from "../vm/index.js";

let category = ""

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
        <option>No Blocks</option>
    </select></p>
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

const renderBlocksInList = () => {
    switch (category) {
        case "dom":
            document.getElementById("block").innerHTML = `
                <option value="dom_getBody">Get Body</option>
            `
    }
}

window.selectCategory = (category2) => {
    category = category2
    renderBlocksInList
}