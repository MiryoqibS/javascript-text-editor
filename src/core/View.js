import { Editor } from "../ui/Editor";

export class View {
    constructor() {
        this.editor = new Editor();
    }

    render(root) {
        const editor = this.editor.render();
        root.appendChild(editor);
        this.editor.setText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis nisl cursus bibendum sit nulla accumsan sodales ornare. At urna viverra non suspendisse neque, lorem. Pretium condimentum pellentesque gravida id etiam sit sed arcu euismod. Rhoncus proin orci duis scelerisque molestie cursus tincidunt aliquam.");
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