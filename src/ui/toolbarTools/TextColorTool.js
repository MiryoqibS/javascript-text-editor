export class TextColorTool {
    constructor(onChange) {
        this.onChange = onChange;
    }

    render() {
        const container = document.createElement("div");
        container.className = "editor-toolbar__tool";

        const input = document.createElement("input");
        input.type = "color";
        input.className = "editor-toolbar__tool-picker";

        input.addEventListener("input", () => {
            const editorField = document.querySelector(".editor-field");
            editorField.focus();
            document.execCommand("foreColor", false, input.value);
        });

        container.appendChild(input);

        return container;
    }
}