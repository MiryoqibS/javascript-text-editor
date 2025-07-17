import { loadIcon } from "../../utils/loadIcon";

export class ToolbarInputColor {
    constructor(onChange) {
        this.onChange = onChange;
    }

    render() {
        const container = document.createElement("div");
        container.className = "editor-toolbar__tool accordion";

        const icon = loadIcon("arrowDown", 10, 6);

        const input = document.createElement("input");
        input.type = "color";
        input.className = "editor-toolbar__tool-picker";

        input.addEventListener("input", () => this.onChange(input));

        container.appendChild(input);
        container.appendChild(icon);

        return container;
    }
}