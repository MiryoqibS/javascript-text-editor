import { Toolbar } from "./Toolbar";
import { EditorField } from "./EditorField";

export class Editor {
    constructor() {
        this.container = document.createElement("div");
        this.container.className = "editor container";

        this.editorField = new EditorField();
        this.toolbar = new Toolbar();
    }

    render() {
        const toolbarElement = this.toolbar.render();
        const editorFieldElement = this.editorField.render();

        this.container.appendChild(toolbarElement);
        this.container.appendChild(editorFieldElement);

        this.toolbar.changeFontColor(editorFieldElement);
        this.toolbar.changeFontHeading(editorFieldElement, this.editorField.getSelectedRange.bind(this.editorField));
        this.toolbar.clearText(this.editorField.setText.bind(this.editorField));

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
}