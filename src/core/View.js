import { Editor } from "../ui/Editor";

export class View {
    constructor() {
        this.editor = new Editor();
    }

    render(root) {
        const editor = this.editor.render();
        root.appendChild(editor);
        this.editor.setText("Type text...");
    }

    bindTextInput(handler) {
        this.editor.onInput(handler);
    }

    updateText(text) {
        this.editor.setText(text);
    }

    getText() {
        return this.editor.getText();
    }
}