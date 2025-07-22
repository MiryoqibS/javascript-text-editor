import { Toolbar } from "./Toolbar";
import { EditorField } from "./EditorField";

export class Editor {
    constructor() {
        this.container = document.createElement("div");
        this.container.className = "editor container";

        this.editorField = new EditorField();
        this.toolbar = new Toolbar(this.editorField.autoResize.bind(this.editorField), this.editorField.getEditorFieldElement.bind(this.editorField));
    }

    render() {
        const editorGlobalTools = this.#renderGlobalTools();
        const toolbarElement = this.toolbar.render();
        const editorFieldElement = this.editorField.render();

        this.container.appendChild(editorGlobalTools);
        this.container.appendChild(toolbarElement);
        this.container.appendChild(editorFieldElement);

        return this.container;
    }

    getText() {
        return this.editorField.getText();
    }

    setText(text) {
        this.editorField.setText(text);
    }

    onInput(callback) {
        this.editorField.onInput(callback);
    }

    #renderGlobalTools() {
        const container = document.createElement("header");
        container.className = "editor-header";

        // Toggle для смены тем
        const toggle = document.createElement("div");
        toggle.className = "editor-header__toggle";

        const toggleBar = document.createElement("span");
        toggleBar.className = "editor-header__toggle-bar";

        const toggleInput = document.createElement("input");
        toggleInput.className = "editor-header__toggle-input";
        toggleInput.type = "checkbox";
        toggleInput.addEventListener("input", () => {
            if (toggleInput.checked) {
                document.documentElement.setAttribute("data-theme", "dark");
            } else {
                document.documentElement.setAttribute("data-theme", "light");
            };
        });
        
        toggle.appendChild(toggleBar);
        toggle.appendChild(toggleInput);

        container.appendChild(toggle);

        return container;
    }
}